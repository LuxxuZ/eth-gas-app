//import rabbitLogo from "../../images/rabbit-logo.svg";
import { CgSpinner } from "react-icons/cg";

export default function GasContainer({
  speed,
  value,
  color,
  firstLoading,
  fetching,
}) {
  return (
    <div className={`flex flex-col justify-center items-center text-c${color}`}>
      <div
        className={`shadow-csw bg-tcwhite border-4 border-bcwhite rounded-full w-72 h-72 flex items-center justify-center`}
      >
        <p className="text-6xl font-bold text-shadow-gsw">
          {!firstLoading ? (
            value / 10
          ) : (
            <CgSpinner className="animate-spin-fast" />
          )}
        </p>
        <div className="absolute w-10 h-10 flex items-center justify-center pt-32 text-gray-400">
          {fetching && <CgSpinner className="animate-spin-fast" />}
        </div>
      </div>
      <p className="font-medium text-cxl text-shadow-2gsw">{speed}</p>
    </div>
  );
}
