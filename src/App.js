import React, { useState } from "react";
import Background from "./components/Background/Background";
import FormAdd from "./components/FormAdd/FormAdd";
import Information from "./components/Information/Information";
import ValidateUser from "./components/ValidateUser/ValidateUser";
const App = () => {
  const [users, setUsers] = useState([]);
  const [validateName, setValidateName] = useState(true);
  const [validateAge, setValidateAge] = useState(true);
  const setUser = (user) => {
    // check name
    if (user.name === "") {
      setValidateName(false);
    }
    // check age
    if (
      user.age === "" ||
      user.age <= 0
    ) {
      setValidateAge(false);
    }
    if((user.name !== "") &&  user.age > 0){
      setUsers((prevState) => {
        return [...prevState, user];
      });
    } 
  };
  const setValidateHandler = () => {
    setValidateAge(true);
    setValidateName(true);
  };
  return (
    <Background>
      <FormAdd onSetUser={setUser} />
      {(validateName === false || validateAge === false) && (
        <ValidateUser
          name={validateName}
          age={validateAge}
          changeHandler={setValidateHandler}
        />
      )}
      {users.length !== 0 && <Information renderUsers={users} />}
    </Background>
  );
};

export default App;
