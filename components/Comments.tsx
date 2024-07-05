import React from "react";
import CommentFrom from "./CommentFrom";

const Comments = ({ postId }: { postId: string }) => {
  return (
    <div className="w-full mt-12">
      <h3 className="text-teal-700 text-lg font-bold">Add Your Experience</h3>
      <CommentFrom trekId={postId}/>
    </div>
  );
};

export default Comments;
