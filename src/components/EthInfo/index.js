import { ethChange24h, ethPriceUsd } from "../../utilities/eth-info";

import EthLogo from "../../icons/EthLogo.svg";
import {
  EthChangeText,
  EthImg,
  EthPriceText,
  InfoDiv,
  LoadingDiv,
  LoadingEth,
} from "./styles";

export default function EthInfo({ ethPrice, ethChange, firstLoading }) {
  const numEthChange = parseFloat(ethChange);
  const negativeChange = numEthChange < 0 ? "#f87171" : "#9DC64B";

  if (firstLoading) {
    return (
      <LoadingDiv>
        <LoadingEth />
      </LoadingDiv>
    );
  }
  return (
    <InfoDiv>
      <EthImg
        className="text-red-400"
        src={EthLogo}
        alt="eth Logo"
        draggable={false}
      />
      <EthPriceText>{ethPriceUsd(ethPrice)}</EthPriceText>
      <EthChangeText TextColor={negativeChange}>
        ({ethChange24h(ethChange)}%)
      </EthChangeText>
    </InfoDiv>
  );
}
