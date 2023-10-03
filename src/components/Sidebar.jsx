// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/EmployeeDetails",
//             name:"Student Details",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/EmployeeList",
//             name:"Student List",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/Employee",
//             name:"Employee List",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Kitkat</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;




import React, { useState } from "react";
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
  const [showStudentDetails, setShowStudentDetails] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowStudentDetails(false); // Close student details when collapsing the sidebar
    }
  };

  const toggleStudentDetails = () => {
    setShowStudentDetails(!showStudentDetails);
  };

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/EmployeeDetails",
      name: "Details",
      icon: <FaUserAlt />,
      subItems: [
        {
            path: "/EmployeeDetails",
            name: "Add Student",
          },
          {
            path: "/EmployeeDetails1",
            name: "Add Employee",
          },
        {
          path: "/EmployeeList",
          name: "View Student",
        },
        {
          path: "/EmployeeList1",
          name: "View Employee",
        },
      ],
    },
    {
      path: "/Employee",
      name: "Student List",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Employee",
      name: "Employee List",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Kitkat
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div className="link" onClick={toggleStudentDetails}>
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
                <div className="dropdown-icon">
                  <FaChevronDown
                    style={{
                      transform: showStudentDetails ? "rotate(180deg)" : "none",
                    }}
                  />
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
            {/* Render submenus if they exist and if Student Details is open */}
            {item.subItems && showStudentDetails && isOpen && (
              <div className="submenu">
                {item.subItems.map((subItem, subIndex) => (
                  <NavLink
                    to={subItem.path}
                    key={subIndex}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">
                      {/* You can add sub-item icons here */}
                    </div>
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
