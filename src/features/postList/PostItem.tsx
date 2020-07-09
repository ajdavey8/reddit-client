import React from 'react';
import { useSelector } from 'react-redux';
import { AllHtmlEntities as Entities } from 'html-entities';
import parse from 'html-react-parser';
import { faArrowUp, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectPost } from './postListSlice';
import '../../sass/postItem.scss';

const entities = new Entities();

interface PostItem {
  id: string;
}

const PostItem = ({ id }: PostItem) => {
  const post = useSelector(selectPost(id));
  const date = new Date(post?.created_utc * 1000);
  return (
    <div className="post-item__container">
      <div className="post-item__heading">
        <p className="post-item__heading-info">
          Posted by {post?.author} {date.toDateString()}
        </p>
        <p className="post-item__heading-title">{post?.title}</p>
      </div>
      <div></div>
      <div className="post-item__main">
        {!post?.selftext_html && <img src={entities.decode(post?.preview?.images[0].source.url)} alt={post?.title} />}
        {parse(entities.decode(post?.selftext_html))}
        {!post?.selftext_html && !post?.preview && <a href={post?.url}>{post?.url}</a>}
      </div>
      <div className="post-item__info">
        <div className="post-item__upvotes">
          <FontAwesomeIcon icon={faArrowUp} />
          <p>{post?.ups}</p>
        </div>
        <div className="post-item__comments">
          <FontAwesomeIcon icon={faCommentAlt} />
          <p>{post?.num_comments} Comments</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
