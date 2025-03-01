import styled, { css } from 'styled-components';
import { media } from './Media';

type ButtonVariant = 'default' | 'full' | 'small' | 'Step' | 'Cancel' | 'submit' | 'Link';

const BUTTON_STYLES: Record<ButtonVariant, ReturnType<typeof css>> = {
  default: css`
    background: none;
    width: auto;
    min-width: 50%;
    font-weight: 600;
    margin-top: 0.75rem;
    color: var(--secondary);
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;

    ${media.mobile`
      width: 100%;
      justify-content: center;
    `}
  `,
  full: css`
    background: var(--main-color);
    width: 100%;
    border: none;
    color: white;
    padding: 0.75rem;
    border-radius: 1.25rem;
    font-weight: 600;
    text-align: center;
    font-size: 21px;
    font-family: "Noto Serif Todhri", serif;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    ${media.mobile`
      font-size: 16px;
      padding: 0.5rem;
    `}

    ${media.tablet`
      font-size: 18px;
      padding: 0.6rem;
    `}
  `,
  Cancel: css`
    color: black;
    width: auto;
    min-width: 20%;
    border: 2px solid black;
    padding: 0.75rem;
    border-radius: 1.25rem;
    text-align: center;
    font-size: 21px;
    font-family: "Noto Serif Todhri", serif;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    ${media.mobile`
      width: 100%;
      font-size: 16px;
      padding: 0.5rem;
    `}

    ${media.tablet`
      min-width: 30%;
      font-size: 18px;
    `}
  `,
  small: css`
    background: var(--main-color);
    border: none;
    color: var(--color-white);
    border-radius: 7px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
    height:60px;
    &:hover,
    &:focus {
      background: var(--second-color);
      transform: translateY(-2px);
    }

    ${media.mobile`
      padding: 0.4rem 0.8rem;
      font-size: 14px;
      height:40px;
    `}

    ${media.tablet`
      padding: 0.45rem 0.9rem;
      font-size: 15px;
      height:50px;
    `}
  `,
  Step: css`
    background: var(--second-color);
    border: none;
    color: var(--background-color);
    padding: 0.75rem;
    border-radius: 1.25rem;
    font-weight: 600;
    text-align: center;
    font-family: "Noto Serif Todhri", serif;
    cursor: pointer;
    margin-top: 20px;
    width: 180px;
    font-size: 21px;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      background: var(--main-color);
      transform: translateY(-2px);
    }

    ${media.mobile`
      width: 120px;
      font-size: 16px;
      padding: 0.5rem;
    `}

    ${media.tablet`
      width: 150px;
      font-size: 18px;
    `}
  `,
  submit: css`
    background: var(--second-color);
    border: none;
    color: var(--color-white);
    padding: 0.75rem 1.5rem;
    border-radius: 1.25rem;
    text-align: center;
    font-size: 21px;
    font-family: "Noto Serif Todhri", serif;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      background: var(--main-color);
      transform: translateY(-2px);
    }

    ${media.mobile`
      width: 100%;
      font-size: 16px;
      padding: 0.5rem 1rem;
    `}

    ${media.tablet`
      width: auto;
      min-width: 200px;
      font-size: 18px;
    `}
  `,
  Link: css`
    background: none;
    border: none;
    color: #7092e8;
    text-align: center;
    font-size: 23px;
    font-family: "Noto Serif Todhri", serif;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      color: var(--main-color);
      text-decoration: underline;
    }

    ${media.mobile`
      font-size: 16px;
    `}

    ${media.tablet`
      font-size: 18px;
    `}
  `,
};

interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = styled.button<ButtonProps>`
  ${({ variant = 'default' }) => BUTTON_STYLES[variant] || BUTTON_STYLES.default}
`;
