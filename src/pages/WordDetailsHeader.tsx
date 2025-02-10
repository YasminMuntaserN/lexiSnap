import { useWord } from "../context/WordContext";
import { BiSave } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Link from "../ui/Link";
import { Icon } from "../ui/Icon";
import { Header } from "../styledComponents/Header";

function WordDetailsHeader({update}){
  const {prepareWordForSave ,word ,isShowMode ,SetIsShowMode}= useWord();
  const wordForSave =prepareWordForSave();

  const handleUpdateWord = ()=>{
    console.log(wordForSave);
    update({id: word._id ,data :wordForSave}, {
      onSuccess: () => {
        SetIsShowMode(false);
      }
    });
  }
  return (
      <Header>
          <Link to="dashboard" onClick={()=>SetIsShowMode(false)}/>
          <h1>{isShowMode ? "Enrich the word" : "Word Details"}</h1>
          {isShowMode ?<Icon as={BiSave} style={{ fontSize: "32px", marginTop: "10px" }} onClick={()=>handleUpdateWord()}/>
            :
            <div>
              <Icon as={FaRegEdit} style={{ fontSize: "32px", marginTop: "10px" }} onClick={()=>SetIsShowMode(true)}/>
              <Icon as={MdDelete} style={{ fontSize: "32px", marginTop: "10px" }} onClick={()=>handleUpdateWord()}/>
            </div>
          }
      </Header>
  )
}

export default WordDetailsHeader;