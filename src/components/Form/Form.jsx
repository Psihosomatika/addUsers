import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { onSave, onCheck } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    let objReturn = {
      isOpen: true,
      title: "Некорректный ввод",
      message: "Эти поля не могут быть пустыми",
    };
    if (event.target.name.value === "" || event.target.age.value === "") {
      onCheck(objReturn);
    } else if (event.target.age.value < 0) {
      objReturn = {
        isOpen: true,
        title: "Некорректный возраст",
        message: "Возраст должен быть больше 0",
      };
      onCheck(objReturn);
    } else {
      const name = event.target.name.value;
      const age = event.target.age.value;
      const id = uuidv4();
      event.target.name.value = "";
      event.target.age.value = "";

      onSave({ name, age, id });
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="введите имя"
        className={styles.input}
        id="name"
      />
      <input
        type="number"
        placeholder="введите возраст"
        className={styles.input}
        id="age"
      />
      <button className={styles.button}>Сохранить</button>
    </form>
  );
};

export default Form;
