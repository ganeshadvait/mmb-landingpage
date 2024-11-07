import React from "react";
import SideNav from "./SideNavComponent";
import AdminSub from "./AdminSubDashboard";

const AdminDashboard = () => {
  return (
    <div className="row p-5">
      <div className="col-md-2 sidenav">
        <SideNav />
      </div>
      <div className="col-md-10">
        <AdminSub />
      </div>
    </div>
  );
};

export default AdminDashboard;
