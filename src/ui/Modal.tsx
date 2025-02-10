import { cloneElement, createContext, useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircle } from "react-icons/io";
import styled from "styled-components";

interface ModalContextType {
  openName: string;
  setOpenName: (name: string) => void;
  close: () => void;
  open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName(""); // Close the currently open modal
  const open = (name: string) => setOpenName(name); // Open a modal by name

  return (
    <ModalContext.Provider value={{ openName, setOpenName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 1000;
  transition: all 0.5s ease-in-out;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  padding: 10px;
  min-width: 300px;
`;

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const modalRef = useRef(null);

  // Auto Focus: When modal opens, set focus on the container
  //This improves accessibility by ensuring that screen readers and keyboard users can interact with the modal correctly.
  useEffect(() => {
    if (name === openName && modalRef.current) {
      modalRef.current.focus();
    }
  }, [openName]);
  

  // Close Modal on "Escape" Key Press
  // This ensures users can close the modal without clicking.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (name !== openName) return null;

  return createPortal(
    <Overlay onClick={close}>
      <ModalContainer ref={modalRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        
        <button style={{ background: "none", border: "none" }} onClick={close}>
          <IoMdCloseCircle style={{ fontSize: "32px", color: "#721717" }} />
        </button>

        {cloneElement(children, { onClose: close })}
      </ModalContainer>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
