import type { EducationSectionItemType } from "../navbarElement/EducationSectionItem";

export default function EducationSectionItem(props: EducationSectionItemType) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1 pr-8 text-right">
          <h2 className="text-xl font-semibold">{props.uniName}</h2>
          <p className="text-gray-600 dark:text-gray-300">{props.text}</p>
        </div>
        <div className="flex-1 flex justify-start pl-8">
          <img
            src={props.image}
            alt="Technische Hochschule Ingolstadt"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </>
  );
}
