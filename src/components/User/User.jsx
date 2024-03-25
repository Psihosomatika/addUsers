import styles from "./User.module.css";

const User = (props) => {
  const { name, age } = props;
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {name} - {age} years
      </p>
    </div>
  );
};

export default User;
