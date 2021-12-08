import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: ${(props) => props.theme.bg};
`;

export const CardsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding-top: 9rem;
`;

export const LinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 6rem;
`;

export const LinksText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const LinksRedirection = styled.a`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #9dc64b;
  margin-left: 0.25rem;
`;
