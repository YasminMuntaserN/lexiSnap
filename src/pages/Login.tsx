import Background from "../styledComponents/Background";
import styled from 'styled-components';
import { Button } from "../styledComponents/Button";
import { FcGoogle } from "react-icons/fc";
import ThemeToggle from "../ui/ThemeToggle";
import Logo from "../ui/Logo";
import { useLogin } from "../hooks/useLogin";
import { IoEarthSharp } from "react-icons/io5";
import Link from "../ui/Link";
import { media } from "../styledComponents/Media";

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  flex-direction: column;
  width: 30%;
  gap: 30px;
  height: 80%;
  align-items: center;
  ${media.mobile`
      width:70%;
    `}
  
    ${media.tablet`
      width:70%;
      `}
`;

const Icon=styled.div`
margin-right: 20px;
font-size: 23px;
${media.mobile`
  font-size:16px;
    `}
  ${media.tablet`
    font-size:16px;
    `}
`;

function Login() {
  const{ login, isLoading, error }=useLogin();

  return (
      <Background>
        <Container>
          <Logo />
          {error && <p>there is problem with logging </p>}
          <Button variant="full" onClick={() => login()}>
            <Icon as={FcGoogle} />
            {isLoading ? "Signing in..." : "Continue with Google"}
          </Button>
          <Link to="aboutUs" >
            <IoEarthSharp style={{marginRight: '20px', fontSize: '23px' ,color:"green" }} />Who We Are
          </Link>
          <ThemeToggle />
        </Container>
      </Background>
  );
}

export default Login;