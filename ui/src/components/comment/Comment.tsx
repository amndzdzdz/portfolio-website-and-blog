import type { CommentProps } from '../../types/CommentProps';

export default function Comment(commentProps: CommentProps) {
  const formattedDate = new Intl.DateTimeFormat('de-DE').format(
    new Date(commentProps.date),
  );
  return (
    <div
      id={commentProps.blogPostId}
      className="
            border border-gray-200
                bg-white text-black shadow-xl rounded-xl px-6 py-8 mb-5 mt-5"
    >
      {' '}
      <div className="flex flex-row justify-between mb-5 ">
        <p className="font-extrabold">{commentProps.name}</p>
        <p className="flex justify-right">{formattedDate}</p>
      </div>
      <p>{commentProps.message}</p>
    </div>
  );
}
