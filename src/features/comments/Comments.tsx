import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { AllHtmlEntities as Entities } from 'html-entities';
import { selectComments } from './commentsSlice';
import '../../sass/comments.scss';

const entities = new Entities();

const Comments = () => {
  const { id } = useParams();
  const comments = useSelector(selectComments(id));

  return (
    <div className="comments">
      <h2>Comments</h2>
      {comments?.map((comment: any) => (
        <div key={comment.id} className="comments__comment">
          <p>{comment.author}:</p>
          {parse(entities.decode(comment.body_html))}
        </div>
      ))}
    </div>
  );
};

export default Comments;
