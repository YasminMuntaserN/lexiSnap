import styled from "styled-components";
import Background from "../styledComponents/Background";
import AddNewWord from "../components/Word/AddNewWordButton";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { media } from "../styledComponents/Media";
import { Panel } from "../styledComponents/Panel";
import { useLocation } from "react-router-dom";

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

const ContentWrapper = styled.div<{ added: boolean }>`
display:${({ added }) => (added ?"flex": "")};
justify-content:${({ added }) => (added ?"space-between": "")};
padding-bottom: 10px;
overflow-y:auto;
height:90%;
`;
const ContentContainer = styled.div`
height: 100%;
padding: 30px;
  ${media.mobile`padding: 0px;`}
  ${media.tablet`padding: 0px;`}
`;

function Page({ children }) {
  const location = useLocation();  
  return (
    <Background>
      <Panel>
        <Navbar />
        <Container>
          <Sidebar />
          <ContentWrapper added={location.pathname !== "/tags"}>
            <ContentContainer>{children}</ContentContainer>
          {location.pathname !== "/tags" && <AddNewWord />}
          </ContentWrapper>
        </Container>
      </Panel>
    </Background>
  );
}

export default Page;