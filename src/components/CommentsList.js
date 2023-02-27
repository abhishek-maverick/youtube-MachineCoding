import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) =>
  comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* replies */}
      <div className="pl-5 border border-l-black">
        <CommentsList comments={comment.replies ? comment.replies : []} />
      </div>
    </div>
  ));

export default CommentsList;
