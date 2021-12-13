import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 2rem;
  background-color: ${(props) => props.theme.gas_card.colors.background};
  border: 0.0625rem ${(props) => props.theme.gas_card.colors.border_color} solid;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.gas_card.shadow.card_shadow};
  /* 
  width: 24rem;
  transition: all 150ms linear; 
  */
`;

export const MainContentDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SpeedDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardSpeedH1 = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.gas_card.colors.main_text};
  user-select: none;
  /* 
  */
`;

export const GweiContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* 
  margin: 0; */
`;

export const GweiText = styled.p`
  font-size: 3rem;
  /* 
  line-height: 1;
  font-weight: 700;
  color: ${(props) => props.TextColor}; 
  */
`;

export const GweiParraf = styled.p`
  /* padding-left: 0.25rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${(props) => props.theme.gas_card.colors.secondary_text};
  user-select: none; */
`;

export const IconDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 2rem;
`;

export const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.TextColor};
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: 2.25rem;
  color: ${(props) => props.TextColor};
`;

export const StatsDiv = styled.div`
  /* padding-top: 0.5rem; */
`;

export const StatsText = styled.p`
  /* font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.gas_card.colors.main_text};
  user-select: none; */
`;

export const TimeText = styled.p`
  /* font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.gas_card.colors.secondary_text}; */
`;

//LOADING STYLES

export const MainLoadingDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 24rem;
  height: 14rem;
  padding-top: 2rem;
  padding-left: 2rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: ${(props) => props.theme.gas_card.colors.border_color};
  box-shadow: ${(props) => props.theme.gas_card.shadow.card_shadow};
  background-color: ${(props) => props.theme.gas_card.colors.background};
  transition: all 150ms linear; */
`;

export const MainLoadingContentDiv = styled.div`
  /* display: flex;
  flex-direction: row;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */
`;

export const ContentLoadingDiv = styled.div`
  /* display: flex;
  flex-direction: row;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */
`;

export const CardSpeedContainer = styled.div`
  /* background-color: ${(props) => props.theme.gas_card.colors.loading_bg};
  height: 1.5rem;
  width: 4rem;
  border-radius: 9999px; */
`;

export const GweiTextLoading = styled.div`
  /* width: 4rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.gas_card.colors.loading_bg};
  border-radius: 1rem; */
`;

export const GweiParrafLoading = styled.div`
  /* width: 5rem;
  height: 1.75rem;
  background-color: ${(props) => props.theme.gas_card.colors.loading_bg};
  border-radius: 9999px;
  margin-left: 0.25rem; */
`;

export const IconLoadingDiv = styled.div`
  /* display: flex;
  border-radius: 9999px;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.gas_card.colors.loading_bg}; */
`;

export const StatsLoadingDiv = styled.div`
  /* padding-top: 1rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */
`;

export const StatsTextLoading = styled.div`
  /* width: 4rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.gas_card.colors.loading_bg};
  border-radius: 9999px; */
`;

export const TimeTextLoading = styled.div`
  /* width: 11rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.gas_card.colors.loading_bg};
  border-radius: 9999px;
  margin-top: 0.25rem; */
`;
