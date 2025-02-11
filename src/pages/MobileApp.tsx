import { Content } from "../ui/Content";
import Page from "../ui/Page";
import Link from "../ui/Link";

function MobileApp() {

  return (
    <Page>
          <Link to="dashboard" style={{margin:"20px"}}/>
          <Content>
          <h1>  Our Mobile App </h1>
          <div style={{display:"flex" ,flexDirection:"column" ,gap:"10px" ,marginTop:"20px"}}>
            Under development
          </div>
          </Content>
    </Page>
  );
}

export default MobileApp;