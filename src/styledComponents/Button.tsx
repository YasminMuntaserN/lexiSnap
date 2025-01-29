import styled, { css } from 'styled-components';

type ButtonVariant = 'default' | 'full' |'small' |'Step';

const BUTTON_STYLES: Record<ButtonVariant, ReturnType<typeof css>> = {
  default: css`
    background: none;
    width: 50%;
    font-weight: 600;
    margin-top: 0.75rem;
    color: var(--secondary);
    display: flex;
    gap: 0.5rem;
  `,
  full: css`
    background: var(--main-color);
    width: 100%;
    border: none;
    color:var(--color-white);
    padding: 0.75rem;
    border-radius: 1.25rem;
    font-weight: 600;
    text-align: center;
    font-size:21px;
    font-family: "Noto Serif Todhri", serif;
    cursor: pointer;  
  `,
  small: css`
  background: var(--main-color);
  border: none;
  color:var(--color-white);
  border-radius: 7px;
  text-align: center;
  font-size:50px;
  cursor: pointer;  
  width:60px;
  height:50px;
  font-weight: bold;
  margin-right:60px;
  margin-top:40px;
  &:hover,
&:focus {
  background: var(--second-color); 
}
`,
Step: css`
background: var(--second-color);
border: none;
color:var(--background-color);
padding: 0.75rem;
border-radius: 1.25rem;
font-weight: 600;
text-align: center;
font-size:21px;
font-family: "Noto Serif Todhri", serif;
cursor: pointer;  
margin-top:20px;
width:180px;
height:50px;
&:hover,
&:focus {
  background: var(--main-color); 
}
`,
submit: css`
background: var(--second-color);
width: 20%;
border: none;
color:var(--color-white);
padding: 0.75rem;
border-radius: 1.25rem;
text-align: center;
font-size:21px;
font-family: "Noto Serif Todhri", serif;
cursor: pointer;  
&:hover,
&:focus {
  background: var(--main-color); 
}
`,

};

interface ButtonProps {
  variant?: ButtonVariant; 
}

export const Button = styled.button<ButtonProps>`
  ${({ variant = 'default' }) => BUTTON_STYLES[variant] || BUTTON_STYLES.default}
`;
