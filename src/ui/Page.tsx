import styled from "styled-components";
import Background from "../styledComponents/Background";
import AddNewWord from "../components/Word/AddNewWordButton";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { media } from "../styledComponents/Media";
import { Panel } from "../styledComponents/Panel";

function Page({ children }) {
  const Container = styled.div`
    display: grid;
    height: 100%;
    
    ${media.mobile`
      grid-template-columns: 1fr;
    `}
    
    ${media.tablet`
      grid-template-columns: 1fr;
    `}
    
    ${media.largeTablet`
      grid-template-columns: 0.7fr 2fr 0.1fr;
      margin-top: 5%;
    `}
    
    ${media.desktop`
      grid-template-columns: 0.3fr 2fr 0.1fr;
      height: 93%;
    `}
  `;

  const ContentWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-bottom: 10px;
    overflow-y:auto;
    height:90%;
  `;
  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 70px;
      ${media.mobile`padding: 10px;`}
      ${media.tablet`padding: 10px;`}
  `;
  return (
    <Background>
      <Panel>
        <Navbar />
        <Container>
          <Sidebar />
          <ContentWrapper>
            <ContentContainer>{children}</ContentContainer>
          <AddNewWord />
          </ContentWrapper>
        </Container>
      </Panel>
    </Background>
  );
}

export default Page;