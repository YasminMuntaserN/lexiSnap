import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";
import styled from "styled-components";
import AllWords from "../components/Word/AllWords";
import Page from "../ui/Page";
import Link from "../ui/Link";
import {Loader} from "../ui/Loader";
import { useWord } from "../context/WordContext";
import { useWordList } from "../components/Word/hooks/useWordList";
import { media } from "../styledComponents/Media";

const Header= styled.div`
  font-size:32px;
  color:var(--main-color);
  padding:15px;
  border-bottom:0.5px solid var(--color-gray);
  margin-bottom:5px;
  font-weight:600;
  display:flex;
  gap:100px;
    ${media.mobile`
      font-size: 16px;
      `}
  ${media.tablet`
    font-size: 18px;
      `}
`;
const Container =styled.div`
margin :20px;
${media.mobile`
  margin :0;
    `}
${media.tablet`
  margin :0;
    `}
`
function TagDetails (){
  const { tagId  } = useParams(); 
const { wordList, isLoading, error ,Tag} = useWordList();
const {setSearchInfo} =useWord();

useEffect(()=>{ 
  setSearchInfo(prev => ({ ...prev, tagId: tagId }))
},[tagId ,setSearchInfo]);

if(error) return <p>there is something get wrong { (error as Error).message}</p>
  return (
  <Page>
    <Container>
        <Header>
            <Link to="tags"/>
            <p> <FaHashtag style={{marginRight:"20px" }} /> {Tag?.name} </p>
        </Header>
        <div>
        {isLoading && <Loader />}
          <AllWords words ={wordList}/>
        </div>
    </Container>
  </Page>
  )
}

export default TagDetails;
