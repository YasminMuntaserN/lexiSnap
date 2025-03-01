import styled from "styled-components";
import { ImgHTMLAttributes, useState } from "react";
import { media } from "../styledComponents/Media";

const ImageWrapper = styled.div<{ size?: string }>`
  position: relative;
  width: ${({ size }) =>
    size === "full" ? "100%" :
    size === "small" ? "50px" :
    "330px"};
  max-width: ${({ size }) => (size === "full" ? "550px" : "330px")};
  height: ${({ size }) =>
    size === "full" ? "auto" :
    size === "small" ? "50px" :
    "250px"};

  ${media.mobile`
    width: ${({ size }) =>
      size === "full" ? "90%" :
      size === "small" ? "40px" :
      "250px"};
    max-width: ${({ size }) => (size === "full" ? "200px" : "250px")};
    height: ${({ size }) =>
      size === "full" ? "auto" :
      size === "small" ? "40px" :
      "200px"};
  `}

  ${media.tablet`
    width: ${({ size }) =>
      size === "full" ? "80%" :
      size === "small" ? "45px" :
      "300px"};
    max-width: ${({ size }) => (size === "full" ? "300px" : "300px")};
    height: ${({ size }) =>
      size === "full" ? "auto" :
      size === "small" ? "45px" :
      "220px"};
  `}
`;

const StyledImage = styled.img<{ size?: string; isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ size }) => (size === "small" ? "50%" : "12px")};
  transition: opacity 0.3s ease;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
`;

const Placeholder = styled.div<{ size?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-box-background);
  border-radius: ${({ size }) => (size === "small" ? "50%" : "12px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
  alt?: string;
}

function Image({ src, size, alt = "image", ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageWrapper size={size}>
      {!isLoaded && <Placeholder size={size} />}
      <StyledImage
        src={src}
        alt={alt}
        size={size}
        isLoaded={isLoaded}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </ImageWrapper>
  );
}

export default Image;
