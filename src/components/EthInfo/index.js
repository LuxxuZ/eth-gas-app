import { ethChange24h, ethPriceUsd } from "../../utilities/eth-info";

export default function EthInfo({ ethPrice, ethChange }) {
  return (
    <div className="">
      <p>
        {ethPriceUsd(ethPrice)} ({ethChange24h(ethChange)}%)
      </p>
    </div>
  );
}
