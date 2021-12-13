import styled from "styled-components";

export const HeaderMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1rem;
  background-color: #ffffff;
  width: 100%;
  height: 5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: #f3f4f6;
  font-size: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-left: 0.75rem;
  user-select: none;
`;
