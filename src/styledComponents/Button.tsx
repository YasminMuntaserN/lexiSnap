import styled, { css } from 'styled-components';
import { media } from './Media';

type ButtonVariant = 'default' | 'full' |'small' |'Step'|'Cancel' |'submit' |'Link';

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
Cancel: css`
    color:black;
  width: 20%;
  border: none;
  border: 2px solid black;
  padding: 0.75rem;
  border-radius: 1.25rem;
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
  cursor: pointer;  
  font-weight: bold;
  margin-top:40px;
  margin-right:10px;
  &:hover,
&:focus {
  background: var(--second-color); 
}
${media.mobile`
  width:30px;
  height:30px;
`}
${media.tablet`
  width:40px;
  height:40px;
`}
  ${media.largeTablet`
    width:80px;
    height:50px;
`}
${media.desktop`
  width:80px;
  height:50px;
`}
`,
Step: css`
background: var(--second-color);
border: none;
color:var(--background-color);
padding: 0.75rem;
border-radius: 1.25rem;
font-weight: 600;
text-align: center;

font-family: "Noto Serif Todhri", serif;
cursor: pointer;  
margin-top:20px;
width:180px;
font-size:21px;
height:50px;
&:hover,
&:focus {
  background: var(--main-color); 
}
${media.mobile`
  width:120px;
  font-size:18px;
`}
`,
submit: css`
background: var(--second-color);
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
${media.mobile`
  width: 50%;
`}
${media.desktop`
  width: 20%;
`}
`,
Link: css`
background:none;
border: none;
color: #0a2977;
text-align: center;
font-size:23px;
font-family: "Noto Serif Todhri", serif;
cursor: pointer;  
&:hover,
&:focus {
  color: #971212;
}
`,
};

interface ButtonProps {
  variant?: ButtonVariant; 
}

export const Button = styled.button<ButtonProps>`
  ${({ variant = 'default' }) => BUTTON_STYLES[variant] || BUTTON_STYLES.default}
`;
