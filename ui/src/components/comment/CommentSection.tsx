import ContactForm from "../../components/contact/ContactForm";
import type { CommentProps } from "../../types/CommentProps";
import Comment from "./Comment";

const formProps = {
  title: "Write a comment!",
  onSubmit: { this: "that" },
};

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
            md:flex-row items-center justify-center gap-12 w-full
      "
      >
        <div
          className=" bg-white min-h-screen p-10 md:p-20 rounded-2xl
            w-full md:w-1/2 text-center justify-center md:text-left
        "
        >
          <h1 className="text-black text-2xl font-extrabold">
            Tell me your opinion in the comments!
          </h1>
          {comments.map((comment) => {
            return <Comment {...comment}></Comment>;
          })}
        </div>
        <ContactForm {...formProps}></ContactForm>
      </div>
    </section>
  );
}
