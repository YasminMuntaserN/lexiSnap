import AddForm from "./AddForm";
import Modal from "./Modal";

function AddModal({onCloseParentModal , name}){
  return (
    <Modal>
    <Modal.Open opens={`${name}InputForm`}>
    <span style={{ color: "blue", cursor: "pointer" }}> here </span>  
    </Modal.Open>

      <Modal.Window name={`${name}InputForm`}>
        <AddForm  onCloseParentModal={onCloseParentModal}  name={name}/>
      </Modal.Window>
    </Modal>    
  )
}

export default AddModal;