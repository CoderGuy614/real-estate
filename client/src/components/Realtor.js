import React from "react";

const Realtor = ({ realtor }) => {
  return (
    <div className="user">
      <div
        className="avatar"
        style={{
          backgroundImage: `url('https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png')`,
        }}
      ></div>
      <div className="name">
        <small>Listed by: {realtor.Name}</small>
        <small>
          <i class="fas fa-sign"></i> {realtor.company}
        </small>
        <small>
          <i class="fas fa-envelope-square"></i> {realtor.email}
        </small>
        <small>
          <i class="fas fa-phone-square-alt"></i> {realtor.phone}
        </small>
      </div>
    </div>
  );
};

export default Realtor;
