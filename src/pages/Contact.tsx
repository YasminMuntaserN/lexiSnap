import styled from "styled-components";
import { Content } from "../ui/Content";
import Page from "../ui/Page";
import ContactForm from "../ContactForm";

function Contact() {
  const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 70px;
`;
  return (
    <Page>
      <ContentContainer>
          <Content>
          <h1>Welcome to LexiSnap's Contact Us Page!</h1>
          <div style={{display:"flex" ,flexDirection:"column" ,gap:"10px" ,marginTop:"20px"}}>
          <p>We are delighted to have you as part of our
            community. At LexiSnap, we constantly strive
            to improve our functionalities, user interface,
            and overall user experience. Your feedback is
            invaluable to us.</p>
            <p>Whether you have suggestions for new
            features, ideas to enhance our current
            interface, constructive criticism, or if you
            need to report any errors, we are here to
            listen and assist.</p>
            <p>Please feel free to share your thoughts and
            feedback with us. We appreciate your support
            and look forward to hearing from you!</p>
            <b>Thank you,
              <br/>
            LexiSnap Team</b>
            </div>
            <ContactForm />
          </Content>
      </ContentContainer>
    </Page>
  );
}

export default Contact;