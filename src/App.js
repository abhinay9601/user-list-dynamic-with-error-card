import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setuserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setuserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge , key:Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAdduser={addUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
