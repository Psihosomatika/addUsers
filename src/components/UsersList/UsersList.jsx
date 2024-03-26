import styles from "./UsersList.module.css";
import User from "../User/User";

const UsersList = (props) => {
  const { users } = props;
  // let vDom = null;
  // if (users) {
  //   vDom = ;
  // }
  return (
    <div className={styles.list}>
      {users
        ? users.map((item) => (
            <User name={item.name} age={item.age} key={item.id} />
          ))
        : null}
    </div>
  );
};

export default UsersList;
