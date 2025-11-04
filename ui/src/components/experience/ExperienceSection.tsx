export default function ExperienceSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            My work experience
          </h1>
        </div>
        <div className="mt-12 space-y-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
