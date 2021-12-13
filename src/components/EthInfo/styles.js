import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
  transition: all 150ms linear;
`;

export const EthPriceText = styled.p`
  margin-right: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.gas_card.colors.main_text};
`;

export const EthImg = styled.img`
  width: 1rem;
  margin-right: 0.75rem;
`;

export const EthChangeText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${(props) => props.TextColor};
`;

//LOADING STYLES

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const LoadingEth = styled.div`
  background-color: ${(props) => props.theme.gas_card.colors.loading_bg};
  height: 1.75rem;
  width: 11rem;
  border-radius: 9999px;
`;
