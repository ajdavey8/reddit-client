import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, posts, allPosts, selectLastPostId } from '../features/postList/postListSlice';
import PostItem from '../features/postList/PostItem';
import useScroll from '../hooks/useScroll';

import '../sass/postList.scss';

const PostList = () => {
  const { loading, error } = useSelector(posts);
  const postings = useSelector(allPosts);
  const lastPostId = useSelector(selectLastPostId);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useScroll(fetchMorePosts);

  function fetchMorePosts() {
    dispatch(fetchPosts(lastPostId));
    // @ts-ignore
    setIsFetching(false);
  }

  useEffect(() => {
    if (!(postings.length > 1)) {
      dispatch(fetchPosts());
    }
  }, [dispatch]);
  return (
    <>
      <h1>Reddit Wallpapers</h1>
      {loading === 'pending' && <p>Loading posts...</p>}
      {postings?.map((post: any) => (
        <div key={post.id} className="post-list__wrapper">
          <Link className="post-list__link" to={`/post/${post.id}`} />
          <PostItem id={post.id} />
        </div>
      ))}
      {isFetching && <p>Fetching more posts</p>}
      {error && <p>Oops, there seems to be some kind of error, please try refreshing the page or comeback later</p>}
    </>
  );
};

export default PostList;
