import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";
import { closeIcon } from "../../assets/img";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onClose, open }) => {
  const portalRoot = document.getElementById("portal");
  if (!open || !portalRoot) return null;
  return createPortal(
    <>
      <div className={classes.overlay} role='button' onClick={onClose} />
      <div className={classes.modal}>
        <button className={classes.closeModal} onClick={onClose}>
          <img src={closeIcon} alt='close icon' />
        </button>
        {children}
      </div>
    </>,
    portalRoot
  );
};
