import { useNavigate } from "react-router-dom";
import { Button } from "../styledComponents/Button";
import { HiArrowLeft } from "react-icons/hi2";
function Link({to ,style}){
  const navigate= useNavigate();

  return (
    <Button variant="Link" onClick={()=>navigate(`/${to}`)} style={style}><HiArrowLeft style={{marginRight:"10px" }}/>Back</Button>
  )
}

export default Link ;