import gasVumpLogo from "../../images/gas-vump.svg";
import ToggleButton from "../ToggleButton";
import { MdLocalGasStation } from "react-icons/md";

export default function Header() {
  return (
    <div className="dark:shadow bg-gray-50 dark:bg-chgdark shadow-hsw w-full h-20 flex flex-row items-center fixed px-4 z-20">
      <div className="flex flex-row items-end">
        <MdLocalGasStation className="w-10 h-10 inset-x-0 bottom-0 dark:text-white" />
        <h1 className="dark:text-white ml-1 text-xl font-light select-none">
          ETH Gas Gwei
        </h1>
      </div>
      <ToggleButton />
    </div>
  );
}
