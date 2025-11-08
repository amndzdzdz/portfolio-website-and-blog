import type { EducationSectionItemType } from "../types/educationSectionItemType";

export default function EducationSectionItem(props: EducationSectionItemType) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <div className="flex-1 pr-0 md:pr-8 flex justify-center md:justify-end">
        <div className="w-full md:w-4/4">
          <h2 className="text-xl font-semibold text-center md:text-left">
            {props.uniName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
            {props.text}
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-start pl-0 md:pl-8">
        <img
          src={props.image}
          alt={props.uniName}
          className="w-32 h-32 md:w-30 md:h-30 object-cover shadow-md"
        />
      </div>
    </div>
  );
}
