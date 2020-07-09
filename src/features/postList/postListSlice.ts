import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getPosts } from '../../api/posts';

interface PostsState {
  ids: string[];
  entities: any;
  loading: string;
  error: any;
}

const initialState: PostsState = {
  ids: [],
  entities: {},
  loading: 'idle',
  error: null,
};

interface fetchPosts {
  id: string;
}

export const fetchPosts = createAsyncThunk('posts/fetchAll', async (id: string = '') => {
  const response = await getPosts(id);
  return response.data.children;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = 'idle';

      action.payload.forEach((post: any) => {
        state.entities[post.data.id] = post.data;
        state.ids = Array.from(new Set([...state.ids, post.data.id]));
      });
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = 'idle';
      state.error = action.error;
    });
    builder.addCase('comments/fetchPostAndComments/fulfilled', (state, action: any) => {
      state.loading = 'idle';
      const {
        post,
        post: { id },
      } = action.payload;
      state.entities = {
        ...state.entities,
        [id]: post,
      };
      state.ids = Array.from(new Set([...state.ids, id]));
    });
  },
});

export const posts = (state: RootState) => state.posts;
export const allPosts = (state: RootState) =>
  state.posts.ids.map((id: string) => state.posts.entities[id]).filter((post: any) => !post.over_18);

export const selectPost = (id: string) => (state: RootState) =>
  state.posts.ids.map((id: string) => state.posts.entities[id]).find((post: any) => post.id === id);

export const selectLastPostId = (state: RootState) => state.posts.ids[state.posts.ids.length - 1];

export default postsSlice.reducer;
