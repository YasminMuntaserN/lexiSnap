import { RiAddLine } from "react-icons/ri";
import { Operation as StyledOperation } from "../../styledComponents/Operation";
import Modal from "../../ui/Modal";
import { Text } from "../../ui/Text";
import { Icon } from "../../ui/Icon";
import SearchForm from "./SearchForm";
import { useWord } from "../../context/WordContext";
import { Info, InfoBox } from "../../styledComponents/InfoBox";

function Operation({ type }) {
  const { word } = useWord();

  return (
    <>
      <StyledOperation>
        <Text>{type}</Text>

        <Modal>
          <Modal.Open opens={type}>
            <Icon as={RiAddLine} />
          </Modal.Open>

          <Modal.Window name={type}>
            <SearchForm type={type} />
          </Modal.Window>
        </Modal>
      </StyledOperation>

      <InfoBox>
        {word?.[type]?.map((value, index) => (
          <Info key={index}>{type!=="tags"?value:value.name}</Info>
        ))}
      </InfoBox>
    </>
  );
}

export default Operation;
