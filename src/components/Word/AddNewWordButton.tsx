import { useNavigate } from "react-router-dom";
import { Button } from "../../styledComponents/Button";
import { RiAddLine } from "react-icons/ri";
import { media } from "../../styledComponents/Media";
import styled from "styled-components";

const Icon = styled.div`
${media.mobile`font-size: 30px;`}
${media.tablet`font-size: 30px;`}
${media.largeTablet`font-size: 50px;`}
${media.desktop`font-size: 50px;`}
`;

function AddNewWordButton() {
  const navigate = useNavigate();
  return (
    <Button variant="small" style={{margin:"20px"}} onClick={()=> navigate("/addNewWord")}>
      <Icon as={RiAddLine}/>
    </Button>
  );
}

export default AddNewWordButton;
