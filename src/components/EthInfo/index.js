import { ethChange24h, ethPriceUsd } from "../../utilities/eth-info";

import EthLogo from "../../icons/EthLogo.svg";

export default function EthInfo({ ethPrice, ethChange, firstLoading }) {
  const numEthChange = parseFloat(ethChange);
  const negativeChange = numEthChange < 0 ? "text-red-400" : "text-csgreen";

  if (firstLoading) {
    return (
      <div className="pt-12 flex flex-row animate-pulse">
        <div className="bg-gray-200 dark:bg-loadingdark h-7 w-44 rounded-full"></div>
      </div>
    );
  }
  return (
    <div className="pt-12 flex flex-row">
      <img
        className="w-4 mr-3"
        src={EthLogo}
        alt="eth Logo"
        draggable={false}
      />
      <p className="mr-1 text-lg text font-bold dark:text-ctwhite">
        {ethPriceUsd(ethPrice)}
      </p>
      <p className={`${negativeChange} text-lg `}>
        ({ethChange24h(ethChange)}%)
      </p>
    </div>
  );
}
