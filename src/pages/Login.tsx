import Background from "../styledComponents/Background";
import styled from 'styled-components';
import { Button } from "../styledComponents/Button";
import { FcGoogle } from "react-icons/fc";
import ThemeToggle from "../ui/ThemeToggle";
import Logo from "../ui/Logo";
import { handleGoogleLoginSuccess } from "../services/GoogleLogin";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

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

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: () => console.error("Login Failed"),
  });

  return (
      <Background>
        <Container>
          <Logo />
          <Button variant="full" onClick={() => googleLogin()}>
            <FcGoogle style={{marginRight: '20px', fontSize: '23px' }} />
            Continue with Google
          </Button>
          <ThemeToggle />
        </Container>
      </Background>
  );
}

export default function LoginWrapper() {
  return (
    <GoogleOAuthProvider clientId="211204450015-a7v6g1df8r0iuno5ritt72i8hj82ab6r.apps.googleusercontent.com">
      <Login />
    </GoogleOAuthProvider>
  );
}
