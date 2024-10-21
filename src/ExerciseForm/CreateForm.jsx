import React from "react";

export default function CreateForm({
  userForm,
  handleAddUser,
  handleChangeInfo,
}) {
  return (
    <div>
      <h2 className="h1 text-white bg-dark p-3">Thông tin sinh viên</h2>
      <form className="form-floating" onSubmit={handleAddUser}>
        <div className="row">
          <div className="col">
            <label htmlFor="id">Mã sinh viên</label>
            <input
              onChange={handleChangeInfo}
              type="number"
              className="form-control"
              name="id"
              placeholder="1"
              value={userForm.id}
            />
            <label htmlFor="phone">Số điện thoại</label>
            <input
              onChange={handleChangeInfo}
              type="tel"
              className="form-control"
              name="phone"
              placeholder="+84 1 234 5678"
              value={userForm.phone}
            />
          </div>
          <div className="col">
            <label htmlFor="name">Họ và tên</label>
            <input
              onChange={handleChangeInfo}
              type="text"
              className="form-control"
              name="name"
              placeholder="Nguyễn Văn A"
              value={userForm.name}
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChangeInfo}
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              value={userForm.email}
            />
          </div>
        </div>
        <button className="btn btn-success my-3 fw-bold">Thêm sinh viên</button>
      </form>
    </div>
  );
}
