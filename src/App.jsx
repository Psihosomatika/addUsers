import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import UsersList from "./components/UsersList/UsersList.jsx";
import Modal from "./components/Modal/Modal.jsx";
function App() {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState({
    isOpen: false,
    title: "Некорректный ввод",
    message: "Эти поля не могут быть пустыми",
  });
  const handleSave = (obj) => {
    setUsers((users) => [...users, obj]);
  };

  const handleOpenModal = (isOpen) => {
    setModalOpen((modalOpen) => ({ ...modalOpen, ...isOpen }));
  };
  console.log(users);
  return (
    <div className="app">
      {modalOpen.isOpen ? (
        <Modal
          message={modalOpen.message}
          title={modalOpen.title}
          onCheck={handleOpenModal}
        />
      ) : null}
      <Form onSave={handleSave} onCheck={handleOpenModal} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
