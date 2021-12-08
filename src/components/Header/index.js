import ToggleButton from "../ToggleButton";
import { FaGasPump } from "react-icons/fa";
import { HeaderMainContainer, LogoDiv, Title, TitleContainer } from "./styles";

export default function Header() {
  return (
    <HeaderMainContainer>
      <TitleContainer>
        <LogoDiv>
          <FaGasPump />
        </LogoDiv>
        <Title>ETH Gas Gwei</Title>
      </TitleContainer>
      <ToggleButton />
    </HeaderMainContainer>
  );
}
