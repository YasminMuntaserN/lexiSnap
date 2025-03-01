import styled from 'styled-components';
import { MdSortByAlpha, MdSort } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ThemeToggle from './ThemeToggle';
import Image from './Image';
import SearchBar from './SearchBar';
import { useUser } from '../context/UserContext';
import { useWord } from '../context/WordContext';
import { media } from '../styledComponents/Media';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-family: "Noto Serif Todhri", serif;
  font-size: 21px;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  ${media.mobile`
    flex-direction: column;
    padding: 10px;
    font-size: 16px;
    gap: 5px;
    margin: 0 ;
  `}

  ${media.tablet`
    padding: 12px 15px;
    font-size: 18px;
    gap: 10px;
    margin: 0 ;
  `}
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${media.mobile`
    gap: 5px;
    width: 100%;
    justify-content: center;
  `}

  ${media.tablet`
    gap: 10px;
  `}
`;

const Icon = styled.div`
  font-size: 28px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    color: var(--main-color);
    transform: scale(1.1);
  }

  ${media.mobile`
    font-size: 20px;
  `}

  ${media.tablet`
    font-size: 24px;
  `}
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  ${media.mobile`
    width: 100%;
    justify-content: space-between;
    gap: 5px;
  `}

  ${media.tablet`
    gap: 10px;
  `}
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  ${media.mobile`
    width: 100%;
    gap: 10px;
  `}
`;

function Navbar() {
  const { sortBy, setSortBy, sortOrder, setSortOrder } = useWord();
  const { user, logout } = useUser();

  return (
    <Container>
      <SearchContainer>
        <ThemeToggle />
        {user && <SearchBar placeholder="Search for a Word..." />}
      </SearchContainer>

      {user && (
        <MainContainer>
          <SubContainer>
            <Image src={user?.profilePicture} size="small" />
            <p>{user?.name}</p>
          </SubContainer>
          <div style={{display:"flex"}}>
            <Icon 
              as={MdSortByAlpha} 
              onClick={() => setSortBy(sortBy === "creationDate" ? "word" : "creationDate")}
            />
            <Icon 
              as={MdSort} 
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            />
            <Icon as={RiLogoutCircleRLine} onClick={logout} />
          </div>
        </MainContainer>
      )}
    </Container>
  );
}

export default Navbar;
