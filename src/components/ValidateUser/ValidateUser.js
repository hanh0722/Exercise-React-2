import React from "react";
import styles from "./ValidateUser.module.css";
import BackgroundValidate from "./BackgroundValidate";
const ValidateUser = ({ name, age, changeHandler }) => {
  return (
    <div>
      <BackgroundValidate changeHandler={changeHandler} />
      <div className={styles.validation}>
        <p className={styles.title}>Invalid Input</p>
        <div>
          {name === false && age === false && (
            <p>Please enter a valid name and age (non-empty values).</p>
          )}
          {name === true && age === false && (
            <p>Please enter a valid age ({">0"})</p>
          )}
          {name === false && age === true && <p>Please enter a valid name</p>}
        </div>
        <div className={styles.button}>
          <button onClick={changeHandler}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ValidateUser;
