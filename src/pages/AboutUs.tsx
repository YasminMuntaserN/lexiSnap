import { Content } from "../ui/Content";
import Page from "../ui/Page";
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none; 
  padding: 0; 
  margin-top: 20px; 
`;

const StyledListItem = styled.li`
  margin-bottom: 15px; 
  font-size: 16px; 
  line-height: 1.6; 
`;

const StyledHeading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

function AboutUs() {
  return (
    <Page>
      <Content>
        <StyledHeading>Welcome to LexiSnap's !</StyledHeading>
        Unlock the power of words with LexiSnap, your ultimate vocabulary-building companion! LexiSnap is designed to make language learning easy and enjoyable. Whether you're reading articles, watching videos, or browsing the web, LexiSnap lets you snap and save new words instantly with the help of our powerful Google Chrome extension.

        <StyledList>
          <b>Key Features:</b>
          <StyledListItem><b>Snap & Save:</b> Use our Google Chrome extension to select any text from any webpage and add it to your personalized vocabulary list in the LexiSnap app.</StyledListItem>
          <StyledListItem><b>Write and Organize Words:</b> Easily write new words, along with their translations, definitions, and synonyms. Organize them for quick reference.</StyledListItem>
          <StyledListItem><b>Add Statements and Subtitles:</b> Enrich your vocabulary by adding example statements and subtitles to each word, enhancing your learning context.</StyledListItem>
          <StyledListItem><b>Search & Navigate:</b> Effortlessly search for words and view all related statements and subtitles.</StyledListItem>
          <StyledListItem><b>Rich Definitions:</b> Get comprehensive definitions, translations, and synonyms for every word.</StyledListItem>
          <StyledListItem><b>Pronunciation Guides:</b> Improve your pronunciation with integrated audio guides.</StyledListItem>
          <StyledListItem><b>Seamless Integration:</b> Sync your vocabulary list across devices and access it anytime, anywhere.</StyledListItem>
        </StyledList>
      </Content>
    </Page>
  );
}

export default AboutUs;
