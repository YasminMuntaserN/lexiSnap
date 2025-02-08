import { Content } from "../ui/Content";
import Page from "../ui/Page";
import SupportBox from "../components/Important/SupportBox";
import Link from "../ui/Link";

function Important() {

  return (
    <Page>
          <Link to="dashboard" style={{margin:"20px"}}/>
          <Content>
          <h1>  Support Our Journey </h1>
          <div style={{display:"flex" ,flexDirection:"column" ,gap:"10px" ,marginTop:"20px"}}>
          <p>
          We are a small, passionate team from Gaza, dedicated to developing LexiSnap to help users learn and grow their vocabulary. As a startup, our resources are limited, and maintaining the app's server and database comes with significant costs.</p>
          <p>Your support can make a big difference in ensuring that we can continue to provide and improve LexiSnap. Every contribution, no matter how small, helps us cover our operational costs and allows us to focus on enhancing your learning experience.</p>
          <p>Thank you for considering supporting us.
          Your generosity is greatly appreciated and will help us keep LexiSnap running and evolving.</p>
            </div>
          </Content>
          <SupportBox />
    </Page>
  );
}

export default Important;