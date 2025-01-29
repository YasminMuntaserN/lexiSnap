import styled from "styled-components";

function Image({ src, size }) {
  const StyledImage = styled.img`
    width: ${(props) => (props.size === "full" ? "550px" : "50px")};
    height: ${(props) => (props.size === "full" ? "250px" : "50px")};
    border-radius:  ${(props) => (props.size === "full" ? "30px" :"100%")};
    margin-top:  ${(props) => (props.size === "full" ? "30px" :"0")};
  `;

  return <StyledImage src={src} alt="profile-img" size={size} />;
}

export default Image;
