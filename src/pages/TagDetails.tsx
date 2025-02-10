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

const Header= styled.div`
  font-size:32px;
  color:var(--main-color);
  padding:15px;
  border-bottom:0.5px solid var(--color-gray);
  margin-bottom:5px;
  font-weight:600;
  display:flex;
  gap:100px;
`;
function TagDetails (){
  const { tagId  } = useParams(); 
const { wordList, isLoading, error ,Tag} = useWordList();
const {setSearchInfo} =useWord();

useEffect(()=>{ 
  setSearchInfo(prev => ({ ...prev, tagId: tagId }))
},[tagId ,setSearchInfo]);

if(error) return <p>there is something get wrong {error.message}</p>
  return (
  <Page>
    <div style={{margin:"20px"}}>
        <Header>
            <Link to="tags"/>
            <p> <FaHashtag style={{marginRight:"20px" }} /> {Tag?.name} </p>
        </Header>
        <div>
        {isLoading && <Loader />}
          <AllWords words ={wordList}/>
        </div>
    </div>
  </Page>
  )
}

export default TagDetails;
