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
  const { login, isLoading, error } = useLogin();

  const handleLogin = async () => {
    try {
      await login();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  if (error && typeof error === "object") {
    return <p>There is a problem with logging in. Please try again.</p>;
  }

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