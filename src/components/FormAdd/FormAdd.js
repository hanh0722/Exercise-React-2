import React, { useState } from "react";
import styles from "./FormAdd.module.css";
const FormAdd = ({ onSetUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const setNameHandler = (event) => {
    setName(event.target.value);
  };
  const setAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const setUsers = () => {
    const user = {
      id: Math.random(),
      name: name,
      age: age,
    };
    onSetUser(user);
    setName("");
    setAge("");
  };
  return (
    <div className={styles.form}>
      <h3>Add Information</h3>
      <div>
        <label htmlFor="userName">Username</label>
        <div>
          <input
            value={name}
            onChange={setNameHandler}
            type="text"
            id="userName"
            placeholder="Add Name..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <div>
          <input
            value={age}
            max="100"
            onChange={setAgeHandler}
            type="number"
            id="age"
            placeholder="Your Age..."
          />
        </div>
      </div>
      <button onClick={setUsers}>Add User</button>
    </div>
  );
};

export default FormAdd;
