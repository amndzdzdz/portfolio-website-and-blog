import profile from "../../assets/joseph.webp";

export default function EducationSection() {
  return (
    <section className="min-h-screen pt-15 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex justify-between items-center mb-12">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-start">
            <h1
              className="
                text-4xl md:text-6xl font-extrabold leading-tight
                relative inline-block px-3 md:py-2
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-1 after:w-full after:bg-current
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300 after:ease-out
                hover:after:scale-x-100
              "
            >
              My education
            </h1>
          </div>
        </div>

        {/* Second row: education items */}
        <div className="flex flex-col gap-10">
          {/* Row 1 */}
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-8 text-right">
              <h2 className="text-xl font-semibold">
                Technische Hochschule Ingolstadt
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor of Business Administration (2022 – 2025)
              </p>
            </div>
            <div className="flex-1 flex justify-start pl-8">
              <img
                src={profile}
                alt="Technische Hochschule Ingolstadt"
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-8 text-right">
              <h2 className="text-xl font-semibold">
                Ludwig-Maximilians-Universität München
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Planned Master in Artificial Intelligence (2025 – 2027)
              </p>
            </div>
            <div className="flex-1 flex justify-start pl-8">
              <img
                src={profile}
                alt="Ludwig-Maximilians-Universität München"
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-8 text-right">
              <h2 className="text-xl font-semibold">THI Research Lab</h2>
              <p className="text-gray-600 dark:text-gray-300">
                AI Research Internship (2024)
              </p>
            </div>
            <div className="flex-1 flex justify-start pl-8">
              <img
                src={profile}
                alt="THI Research Lab"
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
