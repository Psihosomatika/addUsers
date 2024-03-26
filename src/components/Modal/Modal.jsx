import styles from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const BodyModal = (props) => {
  const { message, title, onCheck } = props;
  const handleClick = () => {
    onCheck({
      isOpen: false,
    });
  };
  return (
    <div className={styles.shadow} onClick={handleClick}>
      <div className={styles.modal}>
        <div className={styles["wrapper-top"]}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles["wrapper-bottom"]}>
          <p className={styles.text}>{message}</p>
          <button className={styles.button} onClick={handleClick}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BodyModal {...props} />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
