import { useNavigate } from "react-router-dom";
import { Button } from "../styledComponents/Button";
import { HiArrowLeft } from "react-icons/hi2";

interface LinkProps {
  to: string; 
  style?: object; 
  onClick?: ()=>void; 
}

function Link({to ,style ,onClick}:LinkProps){
  const navigate= useNavigate();

  return (
    <Button variant="Link" onClick={()=>{navigate(`/${to}`);onClick();}} style={style}><HiArrowLeft style={{marginRight:"10px" }}/>Back</Button>
  )
}

export default Link ;