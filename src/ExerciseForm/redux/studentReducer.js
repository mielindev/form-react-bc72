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
  isReadOnly: false,
  searchItem: "",
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
      let e = action.payload;
      e.preventDefault();
      let cloneStudent = { ...state.studentForm };
      let cloneListStudent = [...state.listStudent];
      let index = state.listStudent.findIndex((item) => {
        return item.id === cloneStudent.id;
      });
      if (index === -1) {
        cloneListStudent.push(cloneStudent);
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
      let datajson = JSON.stringify(cloneListStudent);
      localStorage.setItem("STUDENTS", datajson);
      message.warning("Xoá thành công!");
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
      return { ...state, studentForm: cloneStudent, isReadOnly: true };
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
      return { ...state, listStudent: cloneListStudent, isReadOnly: false };
    }
    case type.RESET_FORM: {
      let e = action.payload;
      e.preventDefault();
      let cloneStudent = {
        ...state.studentForm,
        id: "",
        fullName: "",
        email: "",
        phone: "",
      };
      return { ...state, studentForm: cloneStudent };
    }
    case type.SEARCH_CHANGE: {
      let data = action.payload.target.value;
      let cloneListStudent = state.listStudent.filter((student) => {
        return student.fullName.toLowerCase().includes(data.toLowerCase());
      });
      return { ...state, searchItem: data, listStudent: cloneListStudent };
    }
    default:
      return state;
  }
};

export default studentReducer;
