import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <div>
      <b>{comment.nickname}</b>
      <span>{comment.comment}</span>
      <span>작성 시간: {comment.insertDt.split('T')[0]}</span>
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    nickname: PropTypes.string,
    comment: PropTypes.string,
    insertDt: PropTypes.string,
  }),
};

Comment.defaultProps = {
  comment: {
    nickname: 'hi',
    comment: 'hello',
    insertDt: '2020-01-11T01:30:17 -09:00',
  },
};

export default Comment;