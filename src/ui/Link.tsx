import { useNavigate } from "react-router-dom";
import { Button } from "../styledComponents/Button";
import { HiArrowLeft } from "react-icons/hi2";
import { useWord } from "../context/WordContext";

interface LinkProps {
  to: string; 
  style?: object; 
  onClick?: ()=>void; 
}

function Link({to ,style ,onClick}:LinkProps){
  const{setSearchTagId ,setWordsPage,setTagsPage,setSearchInfo}=useWord();
  
  const handleOnClick =()=>{
    navigate(`/${to}`);
    onClick();
    setSearchTagId("");
    setWordsPage(1);
    setTagsPage(1);
    setSearchInfo({
      list: [],
      isLoading: false,
      error: null,
      isEmpty: true,
      isSearch: false,
      tagId:""
    })
  }
  const navigate= useNavigate();

  return (
    <Button variant="Link" onClick={()=>{handleOnClick()}} style={style}><HiArrowLeft style={{marginRight:"10px" }}/>Back</Button>
  )
}

export default Link ;