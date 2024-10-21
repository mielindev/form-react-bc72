import React from "react";
import CreateForm from "./CreateForm";
import RenderForm from "./RenderForm";

export default function ExerciseForm() {
  // let handleAddUser = (e) => {
  //   e.preventDefault();
  //   console.log(userForm);
  //   let index = listUser.findIndex((item) => {
  //     return item.id === userForm.id;
  //   });
  //   if (index !== -1) {
  //     message.error("Student has existed");
  //     return;
  //   }
  //   let cloneListUser = [...listUser, userForm];
  //   console.log("👉 ~ handleAddUser ~ cloneListUser:", cloneListUser);
  //   setListUser(cloneListUser);
  //   message.success("Student is successfully created");
  // };
  return (
    <div className="w-75 mx-auto">
      <CreateForm />
      <RenderForm />
    </div>
  );
}
