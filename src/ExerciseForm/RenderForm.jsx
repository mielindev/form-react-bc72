import React from "react";

export default function RenderForm({ listUser }) {
  let renderListUser = () => {
    return listUser.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>{renderListUser()}</tbody>
      </table>
    </div>
  );
}
