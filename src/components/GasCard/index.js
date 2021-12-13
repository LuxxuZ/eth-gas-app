import { getGweiUsd } from "../../utilities/gwei-usd";
import { gweiUsdFmt } from "../../utilities/eth-info";
import {
  CardSpeedH1,
  GweiContainer,
  GweiParraf,
  GweiText,
  IconCircle,
  IconContainer,
  IconDiv,
  MainContainer,
  MainContentDiv,
  MainLoadingDiv,
  CardSpeedContainer,
  SpeedDiv,
  StatsDiv,
  StatsText,
  TimeText,
  GweiTextLoading,
  GweiParrafLoading,
  IconLoadingDiv,
  StatsLoadingDiv,
  StatsTextLoading,
  TimeTextLoading,
  MainLoadingContentDiv,
} from "./styles";
import { useContext } from "react";
import { DarkModeContext } from "../../utilities/context-wrapper";
import { ThemeProvider } from "styled-components";

export default function GasCard({
  speed,
  value,
  color,
  firstLoading,
  fetching,
  softColor,
  time,
  ethPrice,
  Icon,
}) {
  const gweiValue = parseFloat(value);
  const gweiUsd = getGweiUsd({ gWeiCount: gweiValue, ethPrice });
  const { darkMode } = useContext(DarkModeContext);

  if (firstLoading) {
    return (
      <MainLoadingDiv>
        <MainLoadingContentDiv>
          <SpeedDiv>
            <CardSpeedContainer />
            <GweiContainer>
              <GweiTextLoading />
              <GweiParrafLoading />
            </GweiContainer>
          </SpeedDiv>
          <IconDiv>
            <IconLoadingDiv />
          </IconDiv>
        </MainLoadingContentDiv>
        <StatsLoadingDiv>
          <StatsTextLoading />
          <TimeTextLoading />
        </StatsLoadingDiv>
      </MainLoadingDiv>
    );
  }

  return (
    <MainContainer>
      <MainContentDiv>
        <SpeedDiv>
          <CardSpeedH1>{speed}</CardSpeedH1>
          <GweiContainer>
            <GweiText TextColor={color}>{gweiValue}</GweiText>
            <GweiParraf>Gwei</GweiParraf>
          </GweiContainer>
        </SpeedDiv>
        <IconDiv>
          <IconCircle TextColor={softColor}>
            <IconContainer TextColor={color}>
              <Icon />
            </IconContainer>
          </IconCircle>
        </IconDiv>
      </MainContentDiv>
      <StatsDiv>
        <StatsText>Stats</StatsText>
        <TimeText>
          {"<"}
          {time} Minutes | {gweiUsdFmt(gweiUsd)}
        </TimeText>
      </StatsDiv>
    </MainContainer>
  );
}
