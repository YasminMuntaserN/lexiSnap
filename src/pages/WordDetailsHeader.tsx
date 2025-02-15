import { useWord } from "../context/WordContext";
import { BiSave } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Link from "../ui/Link";
import { Icon } from "../ui/Icon";
import { Header } from "../styledComponents/Header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styledComponents/Media";


const H1 =styled.h1`
  ${media.tablet`
    font-size:16px;
  `}
  ${media.mobile`
    font-size:16px;
  `}
`
function WordDetailsHeader({update ,deleteWord}){
  const {prepareWordForSave ,word ,isShowMode ,SetIsShowMode}= useWord();
  const wordForSave =prepareWordForSave();
  const navigate = useNavigate();

  const handleUpdateWord = ()=>{
    update({id: word._id ,data :wordForSave}, {
      onSuccess: () => {
        SetIsShowMode(false);
      }
    });
  }

  const handleDeleteWord = ()=>{
    deleteWord(word?._id , {
      onSuccess: () => {
        navigate("/dashboard");
      }
    });
  }
  return (
      <Header>
          <Link to="dashboard" onClick={()=>SetIsShowMode(false)}/>
          <H1>{isShowMode ? "Enrich the word" : "Word Details"}</H1>
          {isShowMode ?<Icon as={BiSave} onClick={()=>handleUpdateWord()}/>
            :
            <div style={{display:"flex"}}>
              <Icon as={FaRegEdit} onClick={()=>SetIsShowMode(true)}/>
              <Icon as={MdDelete} onClick={()=>handleDeleteWord()}/>
            </div>
          }
      </Header>
  )
}

export default WordDetailsHeader;