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
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  max-width: 400px;
  gap: 30px;
  height: auto;
  margin: auto;
  padding-top:10%;
  text-align: center;
  ${media.mobile`
    width: 80%;
    padding-top:50%;
  `}

  ${media.tablet`
    width: 70%;
  padding-top:30%;
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
  const { login, isLoading } = useLogin();

  const handleLogin = async () => {
    try {
      await login();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };



  return (
    <Background>
      <Container>
        <Logo />
        <Button variant="full" onClick={handleLogin}>
          <Icon as={FcGoogle} />
          {isLoading ? "Signing in..." : "Continue with Google"}
        </Button>
        
        <Link to="aboutUs">
          <IoEarthSharp style={{ marginRight: '20px', fontSize: '23px', color: "green" }} />
          Who We Are
        </Link>
        
        <ThemeToggle />
      </Container>
    </Background>
  );
}

export default Login;