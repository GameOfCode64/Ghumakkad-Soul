import React from "react";
interface comment {
  _id: string;
  name: string;
  _createdAt: string;
  comment: string;
}
interface Props {
  comments: comment[];
  slug: string;
}

const ShowComment = ({ comments, slug }: Props) => {
  return (
    <div className="lg:w-[900px] md:w-[450px] w-full mt-14">
      <h3 className=" font-semibold text-teal-600">All Comments</h3>
      {comments?.length === 0 && <p>No Review yet.</p>}
      {comments?.length > 0 &&
        comments.map((comment) => (
          <div key={comment._id} className="border-b border-teal-600/50 py-2">
            <p>
              <strong>{comment?.name}</strong>{" "}
              <span className="text-gray-500 text-sm">
                {new Date(comment?._createdAt).toLocaleString()}
              </span>
            </p>
            <p className=" text-[16px]">{comment?.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default ShowComment;
