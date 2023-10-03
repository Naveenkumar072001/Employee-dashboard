import React from "react";
import "./dashboard.css";
// import logo from "./logo1.png";

const Dashboard = ({ employees, employees1 }) => {
  return (
    <>
      <div className="dashboard">
       
        {/* <h1>DASHBOARD</h1> */}

        <div className="dashboardbox">
          <div className="EmployeeCount" id="one">
            <p>{employees.length}</p>
            <h4>Students</h4>
            {/* <img className="pic" src={logo} alt="img" /> */}
          </div>

          <div className="EmployeeCount" id="two">
            <p>{employees1.length}</p>
            <h4>Employees</h4>
            {/* <img className="pic" src={logo} alt="img" /> */}
          </div>
          <div className="EmployeeCount" id="three">
            <p>2344</p>
            <h4>Employees</h4>
            {/* <img className="pic" src={logo} alt="img" /> */}
          </div>
          <div className="EmployeeCount" id="four">
            <p>34</p>
            <h4>Employees</h4>
            {/* <img className="pic" src={logo} alt="img" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
