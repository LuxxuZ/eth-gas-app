import gasVumpLogo from "../../images/gas-vump.svg";

export default function Header() {
  return (
    <div className="bg-gray-50 shadow-hsw w-full h-20 flex flex-row justify-start items-center fixed px-4 z-20">
      <div className="flex flex-row items-end">
        <img className="w-10 inset-x-0 bottom-0" src={gasVumpLogo} alt="Logo" />
        <h1 className="ml-1 text-xl font-light">ETH Gas GWEI</h1>
      </div>
    </div>
  );
}
