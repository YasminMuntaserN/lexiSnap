import styled from "styled-components";

const Container =styled.div `
color:var(--background-color);
font-family: "Noto Serif Todhri", serif;
font-size:21px;
margin-top:50px;
margin-left:20px;
`;
function StarterSection(){

  return (
    <Container>
      <p style={{color:'var(--second-color)' ,fontSize:'32px' ,marginBottom:"20px"}}>Welcome to Lexisnap! </p>
      Start your journey to mastering new vocabulary
      by adding your first word.
    </Container>
  )
}

export default StarterSection;