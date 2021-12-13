import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
  from{
    transform: translateX(10%);
  }
  to{
    transform: translateX(90%);
  }
`;

const rightToLeft = keyframes`
  from{
    transform: translateX(90%);
  }
  to{
    transform: translateX(10%);
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  border-radius: 9999px;
  margin-left: auto;
  border-width: 0.125rem;
  width: 4rem;
  padding-top: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 0.25rem;
  cursor: pointer;
  border: 0.125rem ${(props) => props.borderColor} solid;
  background-color: ${(props) => (props.darkMode ? "#d7cee5  " : "#fffccc")};
  transition: all 150ms linear;
  user-select: none;
`;

export const ButtonToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.darkMode ? "100%" : "0%")});
  animation: ${(props) => (props.darkMode ? leftToRight : rightToLeft)} 150ms
    linear;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.toggle_button.sizes.icon_size};
  height: ${(props) => props.theme.toggle_button.sizes.icon_size};
  color: ${(props) => props.theme.toggle_button.colors.icon_color};
`;
