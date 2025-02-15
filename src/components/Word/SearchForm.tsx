import styled from "styled-components";
import WordsList from "./WordsList";
import AddModal from "../../ui/AddModal";
import TagsList from "../Tags/TagsList";
import { useState } from "react";
import { media } from "../../styledComponents/Media";

const Content = styled.div`
  padding: 20px;
  font-size: 16px;
  color: #333;
  ${media.mobile`
    padding: 0;
    `}
${media.tablet`
  padding:0;
    `}
`;

const InfoBox = styled.div`
  background: var(--color-box-background);
  border-left: 4px solid #eb2855;
  padding: 12px;
  margin-top: 30px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.3;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-top:5px;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
`;

interface SearchFormProps {
  type: string;
  onClose?: () => void;
}

function SearchForm({ onClose, type }:SearchFormProps) {
  const [showTagsList , setShowTagsList] = useState(false);
  const isTag = type === "tags";

  return (
    <Content>
      {isTag || showTagsList ?
      <TagsList showTagsList={showTagsList} type={type} setShowTagsList={setShowTagsList}/> 
      :
      <>
          <WordsList type={type} />
    </>}

      <InfoBox>
        <h3>Important:</h3>
        <List>
          <ListItem>
          📍 If you can't find the {type} in your existing {isTag ? "Tags" : "Words"} list...
          </ListItem>
          <ListItem>
          📍 You can add a new {type} to your {isTag ? "Tags" : "Word Info"} and include it in your collection.
          </ListItem>
          <ListItem>
            Simply click <AddModal onCloseParentModal={onClose} name={type} /> to add it.
          </ListItem>
          {!isTag && <ListItem>
            📍 If you want to add a word according to its tag, just click
              <span style={{ color: "blue", cursor: "pointer" }} onClick={()=>setShowTagsList(pre=>!pre)}> here </span>  
            <br/>to show the group of tags that you have previously added.
          </ListItem>}
        </List>
      </InfoBox>
    </Content>
  );
}

export default SearchForm;
