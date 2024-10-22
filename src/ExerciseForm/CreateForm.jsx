import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_STUDENT,
  RESET_FORM,
  SUBMIT_STUDENT,
  UPDATE_STUDENT,
} from "./redux/constant";

export default function CreateForm() {
  let student = useSelector((state) => state.studentReducer.studentForm);
  let readOnly = useSelector((state) => state.studentReducer.isReadOnly);
  let dispatch = useDispatch();
  let handleChangeStudent = (e) => {
    let action = {
      type: CHANGE_STUDENT,
      payload: e.target,
    };
    dispatch(action);
  };
  let handleAddStudent = (e) => {
    let action = {
      type: SUBMIT_STUDENT,
      payload: e,
    };
    dispatch(action);
  };
  let handleUpdateStudent = (e) => {
    let action = {
      type: UPDATE_STUDENT,
      payload: e,
    };
    dispatch(action);
  };
  let handleResetForm = (e) => {
    let action = {
      type: RESET_FORM,
      payload: e,
    };
    dispatch(action);
  };
  return (
    <div>
      <h2 className="h1 text-white bg-dark p-3">Thông tin sinh viên</h2>
      <form id="formStudent" className="form-floating">
        <div className="row">
          <div className="col">
            <label htmlFor="id">Mã sinh viên</label>
            <input
              disabled={readOnly}
              onChange={handleChangeStudent}
              type="number"
              className="form-control"
              name="id"
              placeholder="1"
              value={student.id}
            />
            <label htmlFor="phone">Số điện thoại</label>
            <input
              onChange={handleChangeStudent}
              type="tel"
              className="form-control"
              name="phone"
              placeholder="+84 123 456 789"
              value={student.phone}
            />
          </div>
          <div className="col">
            <label htmlFor="name">Họ và tên</label>
            <input
              onChange={handleChangeStudent}
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Nguyễn Văn A"
              value={student.fullName}
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChangeStudent}
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              value={student.email}
            />
          </div>
        </div>

        <button onClick={handleAddStudent} className="btn btn-success fw-bold">
          Thêm sinh viên
        </button>
        <button
          onClick={handleUpdateStudent}
          className="btn btn-primary m-3 fw-bold"
        >
          Cập nhật
        </button>
        <button onClick={handleResetForm} className="btn btn-danger fw-bold">
          Cài lại
        </button>
      </form>
    </div>
  );
}
