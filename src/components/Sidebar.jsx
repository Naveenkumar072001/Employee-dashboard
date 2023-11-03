import React, { useState } from "react";
import logoimg from "./kitakat Logo.png";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetailsSubMenu, setShowDetailsSubMenu] = useState(false);
  const [showAttendanceSubMenu, setShowAttendanceSubMenu] = useState(false);
  const [showGstSubMenu, setShowGstSubMenu] = useState(false);
  const [showReceiptSubMenu, setShowReceiptSubMenu] = useState(false);
  const [showProductListSubMenu, setShowProductListSubMenu] = useState(false); // Add this useState

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowDetailsSubMenu(false);
      setShowAttendanceSubMenu(false);
      setShowGstSubMenu(false);
    }
  };

  const toggleDetailsSubMenu = () => {
    setShowDetailsSubMenu(!showDetailsSubMenu);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(false);
  };

  const toggleAttendanceSubMenu = () => {
    setShowAttendanceSubMenu(!showAttendanceSubMenu);
    setShowDetailsSubMenu(false);
    setShowGstSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(false);
  };

  const toggleGstSubMenu = () => {
    setShowGstSubMenu(!showGstSubMenu);
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(false);
  };
  const toggleReceiptSubMenu = () => {
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowProductListSubMenu(false);
    setShowReceiptSubMenu(!showReceiptSubMenu);
  };
  const toggleProductListSubMenu = () => {
    setShowDetailsSubMenu(false);
    setShowAttendanceSubMenu(false);
    setShowGstSubMenu(false);
    setShowReceiptSubMenu(false);
    setShowProductListSubMenu(!showProductListSubMenu);
  };
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/EmployeeDetails",
      name: "Student Info",
      icon: <FaUserAlt />,
      subItems: [
        {
          path: "/EmployeeDetails",
          name: "Add Student",
        },
        {
          path: "/EmployeeList",
          name: "View Student",
        },
        {
          path: "/EmployeeDetails1",
          name: "Add Employee",
        },
        {
          path: "/EmployeeList1",
          name: "View Employee",
        },
      ],
    },
    {
      path: "/Employee",
      name: "Attendance",
      icon: <FaRegChartBar />,
      subItems: [
        {
          path: "/Attendanceform",
          name: "Add Attendance",
        },
        {
          path: "/Viewattendance",
          name: "View Attendance",
        },
      ],
    },
    {
      path: "/Employee",
      name: "Receipt",
      icon: <FaCommentAlt />,
      subItems: [
        {
          path: "/cashin",
          name: "CashIn",
        },
        // {
        //   path: "/customerlist",
        //   name: "Cashout",
        // },
      ],
    },
    {
      name: "GST Billing",
      icon: <FaShoppingBag />,
      subItems: [
        {
          path: "/customer",
          name: "Customer",
        },
        {
          path: "/gstbilling",
          name: "GST",
        },
        {
          path: "/nongstbilling",
          name: "Non-GST",
        },
      ],
    },
    {
      name: "Master",
      icon: <FaThList />,
      subItems: [
        // {
        //   path: "/cash",
        //   name: "Cash",
        // },
        // {
        //   path: "/bank",
        //   name: "Bank",
        // },
        // {
        //   path: "/cashin",
        //   name: "Bank Payment",
        // },
        {
          path: "/invoice",
          name: "Invoice No",
        },
        // {
        //   path: "/display",
        //   name: "Display",
        // },
      ],
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "270px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="logoimg"
          >
            <img src={logoimg} alt="logo" />
          </div>
          <div style={{ marginLeft: isOpen ? "20px" : "7px" }} className="bars">
            <FaBars className="baricon" onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div
                className="link"
                onClick={
                  item.name === "Student Info"
                    ? toggleDetailsSubMenu
                    : item.name === "Attendance"
                    ? toggleAttendanceSubMenu
                    : item.name === "GST Billing"
                    ? toggleGstSubMenu
                    : item.name === "Master"
                    ? toggleProductListSubMenu
                    : item.name === "Receipt"
                    ? toggleReceiptSubMenu
                    : null
                }
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
                <div className="dropdown-icon">
                  {isOpen && (
                    <FaChevronDown
                      style={{
                        transform:
                          (item.name === "Student Info" &&
                            showDetailsSubMenu) ||
                          (item.name === "Attendance" &&
                            showAttendanceSubMenu) ||
                          (item.name === "Receipt" && showReceiptSubMenu) ||
                          (item.name === "GST Billing" && showGstSubMenu) ||
                          (item.name === "Master" && showProductListSubMenu)
                            ? "rotate(180deg)"
                            : "none",
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              <NavLink to={item.path} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
            {item.subItems &&
              ((item.name === "Student Info" && showDetailsSubMenu) ||
                (item.name === "Attendance" && showAttendanceSubMenu) ||
                (item.name === "Receipt" && showReceiptSubMenu) ||
                (item.name === "GST Billing" && showGstSubMenu) ||
                (item.name === "Master" && showProductListSubMenu)) &&
              isOpen && (
                <div className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <NavLink
                      to={subItem.path}
                      key={subIndex}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon"></div>
                      <div className="link_text">{subItem.name}</div>
                    </NavLink>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
