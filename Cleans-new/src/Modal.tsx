import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "5px",
    textAlign: "center",
    zIndex: 1000,
  },
};

export const AlertModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={{ textDecoration: "none" }}>{message}</h3>
        <button
          className="order-button"
          onClick={onClose}
          style={styles.button}
        >
          OK
        </button>
      </div>
    </div>,
    document.body,
  );
};

export const useAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showAlert = () => {
    setIsOpen(true);
  };

  const closeAlert = () => {
    setIsOpen(false);
  };

  return { showAlert, isOpen, closeAlert };
};
