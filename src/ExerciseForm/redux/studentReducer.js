import { message } from "antd";
import * as type from "./constant";
let getLocalData = () => {
  let data = localStorage.getItem("STUDENTS");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
let initialState = {
  studentForm: {
    id: "",
    fullName: "",
    email: "",
    phone: "",
  },
  listStudent: getLocalData(),
};

let studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CHANGE_STUDENT: {
      let data = action.payload;
      let { value, name } = data;
      let cloneStudent = { ...state.studentForm, [name]: value };
      return { ...state, studentForm: cloneStudent };
    }
    case type.SUBMIT_STUDENT: {
      let event = action.payload;
      event.preventDefault();
      let data = { ...state.studentForm };
      let index = state.listStudent.findIndex((item) => {
        return item.id === data.id;
      });
      let cloneListStudent = [...state.listStudent];
      if (index === -1) {
        cloneListStudent.push(data);
        message.success("Thêm thành công!");
      } else {
        message.error("Sinh viên đã tồn tại!");
      }
      let datajson = JSON.stringify(cloneListStudent);
      localStorage.setItem("STUDENTS", datajson);
      return { ...state, listStudent: cloneListStudent };
    }
    case type.REMOVE_STUDENT: {
      let idStudent = action.payload;
      let index = state.listStudent.findIndex((item) => {
        return item.id === idStudent;
      });
      let cloneListStudent = [...state.listStudent];
      cloneListStudent.splice(index, 1);
      message.warning("Xoá thành công!");
      let datajson = JSON.stringify(cloneListStudent);
      localStorage.setItem("STUDENTS", datajson);
      return { ...state, listStudent: cloneListStudent };
    }
    case type.EDIT_STUDENT: {
      let data = action.payload;
      let cloneStudent = {
        ...state.studentForm,
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      };
      document.querySelector("input[name='id'").disabled = true;
      return { ...state, studentForm: cloneStudent };
    }
    case type.UPDATE_STUDENT: {
      let event = action.payload;
      event.preventDefault();
      let data = { ...state.studentForm };
      let index = state.listStudent.findIndex((item) => {
        return item.id === data.id;
      });
      let cloneListStudent = [...state.listStudent];
      cloneListStudent[index] = {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      };
      let datajson = JSON.stringify(cloneListStudent);
      localStorage.setItem("STUDENTS", datajson);
      return { ...state, listStudent: cloneListStudent };
    }
    default:
      return state;
  }
};

export default studentReducer;
