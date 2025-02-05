import { RiAddLine } from "react-icons/ri";
import { Button } from "../../styledComponents/Button";
import Modal from "../../ui/Modal";
import AddNewTagForm from "./AddNewTagForm";
import { media } from "../../styledComponents/Media";
import styled from "styled-components";

const Icon = styled.div`
${media.mobile`font-size: 30px;`}
${media.tablet`font-size: 30px;`}
${media.largeTablet`font-size: 50px;`}
${media.desktop`font-size: 50px;`}
`;
function AddNewTag(){
  return (
    <Modal>
        <Modal.Open opens="tags">
          <Button variant="small" >
            <Icon as={RiAddLine}/>
          </Button>
        </Modal.Open>

        <Modal.Window name="tags">
          <AddNewTagForm />
        </Modal.Window>
    </Modal>
  )
}

export default AddNewTag;