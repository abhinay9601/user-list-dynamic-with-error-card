import react, { useState } from "react";
import Card from "../UI/Card";
import classes from "../UI/AddUsers.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, seterror] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      seterror({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non empty values)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const errorhandler = () =>{
    seterror(null);
  }
  return (
    <div>
     {error && <ErrorModel
        title={error.title}
        message={error.mesage}
        onConform={errorhandler}
></ErrorModel>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label HTMLFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <label HTMLFor="userage">User Age(Years)</label>
          <input
            id="userage"
            type="number"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
