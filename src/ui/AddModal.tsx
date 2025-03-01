import styled from "styled-components";
import AddForm from "./AddForm";
import Modal from "./Modal";
import { media } from "../styledComponents/Media";

const AddLink = styled.span`
  color: var(--main-color);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  ${media.mobile`
    font-size: 14px;
  `}
`;

interface AddModalProps {
  onCloseParentModal?: () => void;
  name: string;
}

function AddModal({ onCloseParentModal, name }: AddModalProps) {
  return (
    <Modal>
      <Modal.Open opens={`${name}InputForm`}>
        <AddLink>here</AddLink>
      </Modal.Open>
      <Modal.Window name={`${name}InputForm`}>
        <AddForm onCloseParentModal={onCloseParentModal} name={name} />
      </Modal.Window>
    </Modal>
  );
}

export default AddModal;
