import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchComments } from '../features/comments/commentsSlice';
import Comments from '../features/comments/Comments';
import PostItem from '../features/postList/PostItem';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/">Back to posts</Link>
      <PostItem id={id} />
      <Comments />
    </div>
  );
};

export default Post;
