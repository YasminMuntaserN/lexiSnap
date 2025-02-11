import styled from "styled-components";

interface StyledLineProps {
  bgColor: string;
}

const StyledLine = styled.div<StyledLineProps>`
  width: 4px;
  height: 70px;
  background: ${(props) =>
    `linear-gradient(30deg, ${props.bgColor} 10%, rgba(185,138,185,1) 50%, rgba(148,187,233,1) 80%)`};
  border-radius: 5px;
`;

export function Line() {
  const colors = ["#ff5733", "#33ff57", "#e8bfe8", "#f39c12", "#8e44ad", "#e9e628", "#e87c7c"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return <StyledLine bgColor={randomColor} />;
}
