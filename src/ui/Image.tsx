import styled from "styled-components";

const StyledImage = styled.img`
width: ${(props) => (props.size === "full" ? "550px" :props.size === "small"? "50px":"330px")};
height: ${(props) => (props.size === "full" ? "250px":props.size === "small"? "50px":"250px")};
border-radius:  ${(props) => (props.size !== "small" ? "30px" :"100%")};
margin-top:  ${(props) => (props.size === "full" ? "30px" :"0")};
`;

function Image({ src, size }) {
  return <StyledImage src={src} alt="profile-img" size={size} />;
}

export default Image;
