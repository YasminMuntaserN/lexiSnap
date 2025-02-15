import { useNavigate } from "react-router-dom";
import { Button } from "../styledComponents/Button";
import { HiArrowLeft } from "react-icons/hi2";
import { useWord } from "../context/WordContext";

interface LinkProps {
  to: string;
  style?: object;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Link({ to, style, onClick, children = "Back" }: LinkProps) { 
  const { setSearchTagId, setWordsPage, setTagsPage, setSearchInfo } = useWord();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/${to}`);
    if (onClick) onClick();
    setSearchTagId("");
    setWordsPage(1);
    setTagsPage(1);
    setSearchInfo({
      list: [],
      isLoading: false,
      error: null,
      isEmpty: true,
      isSearch: false,
      tagId: "",
    });
  };

  return (
    <Button variant="Link" onClick={handleOnClick} style={style}>
      <HiArrowLeft style={{ marginRight: "10px" }} />
      {children}
    </Button>
  );
}

export default Link;
