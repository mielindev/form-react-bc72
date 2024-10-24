import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_STUDENT, REMOVE_STUDENT } from "./redux/constant";

export default function RenderForm() {
  let listStudent = useSelector(
    (state) => state.studentReducer.filteredStudents
  );
  let dispatch = useDispatch();
  let handleRemoveStudent = (id) => {
    let action = {
      type: REMOVE_STUDENT,
      payload: id,
    };
    dispatch(action);
  };
  let handleEditStudent = (student) => {
    let action = {
      type: EDIT_STUDENT,
      payload: student,
    };
    dispatch(action);
  };
  let renderListStudent = () => {
    return listStudent.map((student, index) => {
      return (
        <tr key={index}>
          <td>{student.id}</td>
          <td>{student.fullName}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>
          <td>
            <button
              onClick={() => {
                handleRemoveStudent(student.id);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
            <button
              onClick={() => {
                handleEditStudent(student);
              }}
              className="btn btn-warning ms-2"
            >
              Chỉnh sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table table-Light table-striped">
        <thead className="table-dark">
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>{renderListStudent()}</tbody>
      </table>
    </div>
  );
}
