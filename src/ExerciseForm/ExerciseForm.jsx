import React, { useState } from "react";
import CreateForm from "./CreateForm";
import RenderForm from "./RenderForm";

export default function ExerciseForm() {
  const [userForm, setUserForm] = useState({
    id: "",
    phone: "",
    name: "",
    email: "",
  });
  const [listUser, setListUser] = useState([]);
  let handleChangeInfo = (e) => {
    let { value, name } = e.target;
    let cloneUser = { ...userForm };
    cloneUser[name] = value;
    setUserForm(cloneUser);
  };
  let handleAddUser = (e) => {
    e.preventDefault();
    console.log(userForm);
    let cloneListUser = [...listUser, userForm];
    console.log("👉 ~ handleAddUser ~ cloneListUser:", cloneListUser);
    setListUser(cloneListUser);
  };
  return (
    <div className="w-75 mx-auto">
      <CreateForm
        userForm={userForm}
        handleAddUser={handleAddUser}
        handleChangeInfo={handleChangeInfo}
      />
      <RenderForm listUser={listUser} />
    </div>
  );
}
