import { RiAddLine } from "react-icons/ri";
import Modal from "../../ui/Modal";
import { Text } from "../../ui/Text";
import { Icon } from "../../ui/Icon";
import SearchForm from "./SearchForm";
import { useWord } from "../../context/WordContext";
import { Info, InfoBox } from "../../styledComponents/InfoBox";
import { ActionBar } from "../../styledComponents/ActionBar";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  gap: 15px;
  width: 100%;
  
  ${media.mobile`
    gap: 12px;
  `}
`;

function Operation({ type }) {
  const { word ,isShowMode } = useWord();

  return (
    <>
        <Modal>
          <Modal.Open opens={type}>
            <Container>
              <ActionBar>
              <Text>{type}</Text>
              {isShowMode ? <Icon as={RiAddLine} /> :<p></p>}
              </ActionBar>
            </Container>
          </Modal.Open>

          <Modal.Window name={type}>
            <SearchForm type={type} />
          </Modal.Window>
        </Modal>

      <InfoBox>
        {word?.[type]?.map((value, index) => (
          <Info key={index}>{ (typeof value === "object")?type=== "tags" ?value.name :value.word : value }</Info>
        ))}
      </InfoBox>
    </>
  );
}

export default Operation;
