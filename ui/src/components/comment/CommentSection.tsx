import type { CommentProps } from '../../types/CommentProps';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default function CommentSection({
  comments,
}: {
  comments: CommentProps[];
}) {
  return (
    <section
      id="contact-section"
      className="
      min-h-screen bg-linear-to-r from-blue-600
      to-indigo-700 text-white flex items-center
      "
    >
      <div
        className="
            max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse 
            lg:flex-row justify-center gap-12 w-full
      "
      >
        <div
          className=" bg-white min-h-screen p-10 lg:p-20 rounded-2xl
            w-full lg:w-1/2 text-center justify-center lg:text-left
        "
        >
          <h1 className="text-black text-2xl font-extrabold">
            Tell me your opinion in the comments!
          </h1>
          {comments &&
            comments.map((comment) => {
              return (
                <Comment
                  key={comment.blogPostId + comment.date}
                  {...comment}
                ></Comment>
              );
            })}{' '}
        </div>
        <CommentForm></CommentForm>
      </div>
    </section>
  );
}
