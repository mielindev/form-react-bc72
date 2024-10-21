import { message } from "antd";

let initialState = {
  studentForm: {
    id: "1",
    fullName: "alice",
    email: "alice@gmail.com",
    phone: "0123456789",
  },
  listStudent: [],
};

let studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STUDENT": {
      let data = action.payload;
      let { value, name } = data;
      let cloneStudent = { ...state.studentForm, [name]: value };
      return { ...state, studentForm: cloneStudent };
    }
    case "SUBMIT_STUDENT": {
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
      return { ...state, listStudent: cloneListStudent };
    }
    case "REMOVE_STUDENT": {
      let idStudent = action.payload;
      let index = state.listStudent.findIndex((item) => {
        return item.id === idStudent;
      });
      let cloneListStudent = [...state.listStudent];
      cloneListStudent.splice(index, 1);
      message.warning("Xoá thành công!");
      return { ...state, listStudent: cloneListStudent };
    }
    case "EDIT_STUDENT": {
      let data = action.payload;
      console.log("👉 ~ studentReducer ~ data:", data);
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
    case "UPDATE_STUDENT": {
      let event = action.payload;
      event.preventDefault();
      let data = { ...state.studentForm };
      console.log("👉 ~ studentReducer ~ data:", data);
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
      return { ...state, listStudent: cloneListStudent };
    }
    default:
      return state;
  }
};

export default studentReducer;
