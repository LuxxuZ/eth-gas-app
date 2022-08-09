import ToggleButton from "../ToggleButton";
import { FaGasPump } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-tcwhite dark:bg-cbodydark w-full h-20 flex flex-row items-center fixed px-5 z-20 mt-5 pb-4 blur-xl">
      <div className="flex flex-row items-end">
        <div className="bg-gray-100 dark:bg-cnavdark flex items-center justify-center w-16 h-16 rounded-2xl">
          <FaGasPump className="w-8 h-8 dark:text-white" />
        </div>
        <h1 className="dark:text-white text-xl select-none ml-3">
          ETH Gas Gwei
        </h1>
      </div>
      <ToggleButton />
    </div>
  );
}
