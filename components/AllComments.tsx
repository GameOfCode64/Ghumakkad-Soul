import React from "react";
interface Comment {
  _createdAt: string;
  _id: string;
  message: string;
  fullName: string;
}
interface Props {
  comments: Array<Comment>;
}

const AllComments = ({ comments }: Props) => {
  return (
    <div className="mt-8">
      <h3 className="text-teal-700 text-lg font-semibold">All Reviews</h3>
      {comments?.length === 0 && <p>No comments yet.</p>}
      {comments?.length > 0 &&
        comments.map((comment) => (
          <div key={comment?._id} className="border-b border-teal-600/50 py-2">
            <div>
              <p className=" text-[17px] font-semibold text-teal-700">
                {comment.fullName}
              </p>
              <span className="text-gray-500 text-[12px]">
                {new Date(comment?._createdAt).toLocaleString()}
              </span>
            </div>
            <p className=" text-[15px]">{comment?.message}</p>
          </div>
        ))}
    </div>
  );
};

export default AllComments;
