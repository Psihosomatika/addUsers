import styles from "./Modal.module.css";

const Modal = (props) => {
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

export default Modal;
