import styled from "styled-components";
import Background from "../styledComponents/Background"
import { Panel } from "../styledComponents/Panel"
import AddNewWord from "./AddNewWord"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Container =styled.div`
    display: grid;
    grid-template-columns: 0.3fr 2fr 0.1fr;
    height: 93%;
`;
function Page({children}) {
  return (
    <Background>
    <Panel>
    <Navbar />
      <Container>
          <Sidebar />
          {children}
          <AddNewWord />
      </Container>
    </Panel>
  </Background>
  )
}
export default Page