import Background from "../styledComponents/Background";
import styled from 'styled-components';
import { Button } from "../styledComponents/Button";
import { FcGoogle } from "react-icons/fc";
import ThemeToggle from "../ui/ThemeToggle";
import Logo from "../ui/Logo";
import { useLogin } from "../components/GoogleLogin/hooks/useLogin";

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  flex-direction: column;
  width: 30%;
  gap: 30px;
  height: 80%;
  align-items: center;
`;

function Login() {
  
  const{ mutate :GoogleLogin, data: user, isLoading, error }=useLogin();

  console.log(user);
  return (
      <Background>
        <Container>
          <Logo />
          {error && <p>there is problem with loging </p>}
          <Button variant="full" onClick={() => GoogleLogin()}>
            <FcGoogle style={{marginRight: '20px', fontSize: '23px' }} />
            {isLoading ? "Signing in..." : "Continue with Google"}
          </Button>
          <ThemeToggle />
        </Container>
      </Background>
  );
}

export default Login;