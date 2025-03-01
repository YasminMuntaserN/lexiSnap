import styled from "styled-components";
import { FaHashtag } from "react-icons/fa6";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { media } from "../styledComponents/Media";

interface ContainerProps {
  $isHidden: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  padding-top:15px;
  border: 2px solid var(--color-gray); 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  height: 80vh;
  ${media.mobile`
    background: var(--color-box-background);
    display: ${(props: ContainerProps) => props.$isHidden ? 'none' : 'flex'};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px 20px 0 0;
    padding: 15px;
    padding-top:0;
    z-index: 1000;
    height: 12vh;
  `}

  ${media.tablet`
    background: var(--color-box-background);
    display: ${(props: ContainerProps) => props.$isHidden ? 'none' : 'flex'};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px 20px 0 0;
    padding: 15px;
    padding-top:0;
    z-index: 1000;
    height: 12vh;
  `}
`;

const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.mobile`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  `}

  ${media.tablet`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 12px;
  `}
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--main-color);

  &:hover {
    color: var(--second-color);
    transform: translateX(5px);
  }

  ${media.mobile`
    gap: 6px;
    padding: 8px;
    font-size: 12px;

    &:hover {
      transform: translateY(-5px);
    }
  `}

  ${media.tablet`
    gap: 8px;
    padding: 10px;
    font-size: 14px;

    &:hover {
      transform: translateY(-5px);
    }
  `}
`;

const Icon = styled.div`
  font-size: 24px;
  color: inherit;
  ${media.mobile`
    font-size: 20px;
  `}

  ${media.tablet`
    font-size: 22px;
  `}
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: 500;

  ${media.mobile`
    font-size: 12px;
  `}

  ${media.tablet`
    font-size: 14px;
  `}
`;

interface SidebarProps {
  isHidden?: boolean;
}

function Sidebar({ isHidden = false }: SidebarProps) {
  const navigate = useNavigate();
  const { isMobileMode, setDisplayMenu } = useTheme();

  const navigationItems = [
    { icon: FaHashtag, label: "Tags", path: "/tags" },
    { icon: IoExtensionPuzzle, label: "Extension", path: "/extension" },
    { icon: FaMobileAlt, label: "Mobile App", path: "/mobileApp" },
    { icon: FaHandHoldingHeart, label: "Important", path: "/important" },
    { icon: GrContact, label: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobileMode) {
      setDisplayMenu(true);
    }
  };

  return (
    <Container $isHidden={isHidden}>
      <NavigationItems>
        {navigationItems.map((item, index) => (
          <NavItem
            key={index}
            onClick={() => handleNavigation(item.path)}
          >
            <Icon as={item.icon} />
            <Label>{item.label}</Label>
          </NavItem>
        ))}
      </NavigationItems>
    </Container>
  );
}

export default Sidebar;