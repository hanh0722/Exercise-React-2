import React from "react";
import styles from "../FormAdd/FormAdd.module.css";
import User from '../User/User';
const Information = ({ renderUsers }) => {
    const renderAllUsers = renderUsers.map(user =>{
        return <User key={user.id} name={user.name} age={user.age}/>
    })
  return (
    <div className={styles.form}>
        {renderAllUsers}
    </div>
  );
};

export default Information;
