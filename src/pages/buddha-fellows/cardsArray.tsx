import { SectionType } from "./types";

interface CohortButtonProps {
  label: string;
  sectionId: SectionType; // Use SectionType for sectionId
  activeSection: SectionType; // Use SectionType for activeSection
  onClick: (sectionId: SectionType) => void; // Accept SectionType in onClick
  className?: string;
}

const CohortButton: React.FC<CohortButtonProps> = ({
  label,
  sectionId,
  activeSection,
  onClick,
  className,
}) => {
  return (
    <button
      className={` sm:px-6  px-4 h-fit flex gap-2 2xl:text-xl text-sm font-lato-regular sm:py-4 py-2 border border-gray-200 rounded-full sm:mx-0 mx-ato ${
        activeSection === sectionId ? "bg-darkGreen text-white" : "bg-white"
      } ${className} `}
      onClick={() => onClick(sectionId)}
    >
      <svg
        className="my-auto"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="0.302734"
          width="8.00001"
          height="8.00001"
          transform="rotate(45 6 0.302734)"
          fill="#D7DF23"
        />
      </svg>
      {label}
    </button>
  );
};

export default CohortButton;
