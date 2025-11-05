import roedl_partner from "../../assets/roedl__partner_logo.webp";

export default function ExperienceItem() {
  return (
    <div className="flex justify-center m-15">
      <div
        className="
            bg-white dark:bg-gray-800 border border-gray-200
            dark:border-gray-700 shadow-blue-200 shadow-sm hover:shadow-lg 
            transition-shadow w-full max-w-4xl p-8 flex flex-col 
            md:flex-row gap-6
            "
      >
        <div
          className="
                shrink-0 flex items-center 
                justify-center md:justify-start"
        >
          <img
            src={roedl_partner}
            alt="Company Logo"
            className="w-24 h-24 object-contain rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-1">
            Working Student – Machine Learning Engineer
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            15.02.2002 – 15.02.2003
          </p>
          <ul
            className="
                list-disc list-inside text-gray-700 
                dark:text-gray-300 leading-relaxed"
          >
            <li>
              Developed and optimized machine learning models for
              performance-critical systems.
            </li>
            <li>
              Assisted in automating model evaluation and data preprocessing
              workflows.
            </li>
            <li>
              Collaborated with data scientists to improve training efficiency
              and documentation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
