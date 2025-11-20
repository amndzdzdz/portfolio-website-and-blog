import type { CommentProps } from "../../types/CommentProps";

export default function Comment(commentProps: CommentProps) {
  return (
    <div
      id={commentProps.id}
      className="
            border border-gray-200
                bg-white text-black shadow-xl rounded-xl px-6 py-8 mb-5 mt-5"
    >
      {" "}
      <div className="flex flex-row justify-between mb-5 ">
        <p className="font-extrabold">{commentProps.author}</p>
        <p className="flex justify-right">{commentProps.date}</p>
      </div>
      <p>{commentProps.text}</p>
    </div>
  );
}
