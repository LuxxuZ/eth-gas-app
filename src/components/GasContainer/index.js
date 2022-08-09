//import rabbitLogo from "../../images/rabbit-logo.svg";
import { CgSpinner } from "react-icons/cg";

export default function GasContainer({
  speed,
  value,
  color,
  firstLoading,
  fetching,
  darkColor,
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-c${color} dark:text-c${darkColor}dark`}
    >
      <div
        className={`shadow-csw dark:shadow-md bg-tcwhite dark:bg-chgdark border-4 border-bcwhite dark:border-chgdark rounded-full w-72 h-72 flex items-center justify-center`}
      >
        <p className="text-6xl font-bold text-shadow-gsw">
          {!firstLoading ? (
            value / 10
          ) : (
            <CgSpinner className="animate-spin-fast" />
          )}
        </p>
        <div className="absolute w-10 h-10 flex items-center justify-center pt-32 text-gray-400 dark:text-gray-200">
          {fetching && <CgSpinner className="animate-spin-fast" />}
        </div>
      </div>
      <p className="font-medium text-cxl text-shadow-2gsw select-none">
        {speed}
      </p>
    </div>
  );
}
