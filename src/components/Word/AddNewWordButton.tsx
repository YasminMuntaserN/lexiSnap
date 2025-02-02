import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../styledComponents/Button";
import { RiAddLine } from "react-icons/ri";
import { useTags } from "../../context/TagsContext";
import { media } from "../../styledComponents/Media";
import styled from "styled-components";

function AddNewWordButton() {
  const {setShownAddWord} =useTags();
  const navigate = useNavigate();
  const location = useLocation();  

  const Icon = styled.div`
  ${media.mobile`font-size: 30px;`}
  ${media.tablet`font-size: 30px;`}
  ${media.largeTablet`font-size: 50px;`}
  ${media.desktop`font-size: 50px;`}
`;

  const handleAddNew = () => {
    if (location.pathname !== "/tags") { 
      navigate("/addNewWord"); 
    } else {
      setShownAddWord(true);
    }
  };

  return (
    <Button variant="small" onClick={handleAddNew}>
      <Icon as={RiAddLine}/>
    </Button>
  );
}

export default AddNewWordButton;
