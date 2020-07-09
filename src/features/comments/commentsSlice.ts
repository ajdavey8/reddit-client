import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getComments } from '../../api/comments';

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

export const fetchComments = createAsyncThunk('comments/fetchPostAndComments', async (id: string) => {
  const response = await getComments(id);
  const post = response[0].data.children[0].data;
  const topComments = response[1].data.children.filter((comment: any) => comment.kind !== 'more');
  let comments: any = [];
  topComments.map((comment: any) => comments.push(comment.data));
  const res = { post, comments };
  return res;
});

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = 'idle';
      const byId = action.payload.comments.reduce((byId: any, comment: any) => {
        byId[comment.id] = comment;
        return byId;
      }, {});
      state.entities = byId;
      state.ids = Object.keys(byId);
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = 'idle';
      state.error = action.error;
    });
  },
});

export const comments = (state: RootState) => state.comments;
export const selectComments = (parent_id: string) => (state: RootState) =>
  state.comments.ids
    .map((id: string) => state.comments.entities[id])
    .filter((comment: any) => comment.parent_id === `t3_${parent_id}`);

export default commentsSlice.reducer;
