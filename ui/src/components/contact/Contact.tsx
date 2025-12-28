import ContactForm from './ContactForm';
import profile from '../../assets/john_doe.webp';

const formProps = {
  title: 'Send me an email!',
};

export default function Contact() {
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
            max-w-7xl mx-auto px-6 py-12 flex flex-col 
            md:flex-row items-center justify-center gap-12 w-full
      "
      >
        <div
          className="
            w-full md:w-1/2 text-center justify-center md:text-left
        "
        >
          <h1
            className="
              text-4xl md:flex md:text-6xl font-extrabold mb-6 leading-tight
          "
          >
            Get in contact with me!
          </h1>
          <div className="flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="
                w-1/2 md:text-left max-w-md rounded-full shadow-lg object-cover
              "
            />
          </div>
        </div>
        <ContactForm {...formProps}></ContactForm>
      </div>
    </section>
  );
}
