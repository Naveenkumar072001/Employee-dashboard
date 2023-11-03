import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Employeelist.css";

function EmployeeList1({ employees, onDeleteEmployee, onUpdateEmployee }) {
  const [searchInput, setSearchInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [viewEmployeeId, setViewEmployeeId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const filteredEmployees1 = employees.filter((employee) => {
    const searchValue = searchInput.toLowerCase();
    return (
      employee.firstname.toLowerCase().includes(searchValue) ||
      employee.lastname.toLowerCase().includes(searchValue)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = filteredEmployees1.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSaveClick = (editedEmployee, index) => {
    onUpdateEmployee(editedEmployee, index);
    setIsEditing(false);
    setEditedEmployee(null);
  };
  const handleEditClick = (employee) => {
    setIsEditing(true);
    setEditedEmployee(employee);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedEmployee(null);
  };
  const handleViewClick = (employeeId) => {
    setViewEmployeeId(employeeId);
  };

  const handleBackToEmployeeListClick = () => {
    setViewEmployeeId(null);
  };
  return (
    <>
     
       
     
      {viewEmployeeId === null ? (
        <div>
          <h2 className="head">EMPLOYEE LIST</h2>
          <div className="box">
            <Link className="one" to="/EmployeeDetails1">
              <i id="add1" class="fa-solid fa-users"></i>
              <h2>Add Employee</h2>
            </Link>
            <Link className="two" to="/EmployeeList1">
              <i id="view1" class="fa-solid fa-users"></i>
              <h2>View Employee</h2>
            </Link>
          </div>

          {viewEmployeeId === null ? (
            <div>
              <input
                className="search_box1"
                type="text"
                placeholder="Search by name or contact"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{ width: "250px" }}
              />
            </div>
          ) : (
            <button onClick={handleBackToEmployeeListClick}>
              Back to employee List
            </button>
          )}
          <table className="EmployeeTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>ContactNumber</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>dateOfJoining</th>
                <th>dateOfRelieving</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setEditedEmployee({
                                ...editedEmployee,
                                photo: event.target.result,
                              });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    ) : (
                      employee.photo && (
                        <img src={employee.photo} alt={` ${employee.name}`} />
                      )
                    )}
                  </td>

                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.firstname}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            firstname: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.firstname
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.lastname}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            lastname: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.lastname
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.fathername}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            fathername: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.fathername
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.mothername}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            mothername: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.mothername
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="date"
                        value={editedEmployee.dob}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            dateOfBirth: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.dateOfBirth
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="email"
                        value={editedEmployee.email}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.email
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="tel"
                        value={editedEmployee.contactNumber}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            contactNumber: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.contactNumber
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.designation}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            designation: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.designation
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.salary}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            salary: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.salary
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="date"
                        value={editedEmployee.dateOfJoining}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            dateOfJoining: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.dateOfJoining
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="date"
                        value={editedEmployee.dateOfRelieving}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            dateOfRelieving: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.dateOfRelieving
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.experience}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            experience: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.experience
                    )}
                  </td>

                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <>
                        <button
                          className="savebtn"
                          onClick={() => handleSaveClick(editedEmployee, index)}
                        >
                          <i className="fa fa-check"></i>
                        </button>
                        <button
                          className="cancelbtn"
                          onClick={handleCancelClick}
                        >
                          {" "}
                          <i className="fa fa-times"></i>{" "}
                        </button>
                      </>
                    ) : (
                      <button
                        className="editbtn"
                        onClick={() => handleEditClick(employee)}
                      >
                        <i className="fa fa-pencil"></i>
                      </button>
                    )}

                    {viewEmployeeId === null ? (
                      <button
                        className="viewbtn"
                        onClick={() => handleViewClick(employee.id)}
                      >
                        <i className="fa fa-eye"></i>
                      </button>
                    ) : null}

                    <button
                      className="deletebtn"
                      onClick={() => onDeleteEmployee(index)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            {Array.from({
              length: Math.ceil(filteredEmployees1.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(filteredEmployees1.length / itemsPerPage)
              }
            >
              Next Page
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Employee Details</h2>
          <button onClick={handleBackToEmployeeListClick}>
          Back to employee List
        </button>
          {viewEmployeeId !== null ? (
            <>
              {employees.map((employee) => {
                if (employee.id === viewEmployeeId) {
                  return (
                    <div key={employee.id} className="student-details">
                      <div className="student-photo">
                        {employee.photo && (
                          <img
                            className="photo_1"
                            src={employee.photo}
                            alt={`${employee.firstname} ${employee.lastname}`}
                            width="250"
                            height="250"
                          />
                        )}
                      </div>
                      <div className="student-info">
                        <p>
                          {" "}
                          <span className="bold-text">Name:</span>{" "}
                          {employee.firstname} {employee.lastname}
                        </p>

                        <p>
                          <span className="bold-text">Email: </span>
                          {employee.email}
                        </p>
                        <p>
                          <span className="bold-text">Father Name:</span>{" "}
                          {employee.fathername}
                        </p>
                        <p>
                          <span className="bold-text">Mother Name:</span>{" "}
                          {employee.mothername}
                        </p>
                        <p>
                          <span className="bold-text">Date of Birth:</span>{" "}
                          {employee.dateOfBirth}
                        </p>
                        <p>
                          <span className="bold-text">Email:</span>{" "}
                          {employee.email}
                        </p>
                        <p>
                          <span className="bold-text">Contact Number:</span>{" "}
                          {employee.contactNumber}
                        </p>
                        <p>
                          <span className="bold-text">Designation:</span>{" "}
                          {employee.designation}
                        </p>
                        <p>
                          <span className="bold-text">Salary:</span>{" "}
                          {employee.salary}
                        </p>
                        <p>
                          <span className="bold-text">DateOfJoining:</span>{" "}
                          {employee.dateOfJoining}
                        </p>
                        <p>
                          <span className="bold-text">dateOfRelieving:</span>{" "}
                          {employee.dateOfRelieving}
                        </p>
                        <p>
                          <span className="bold-text">Experience:</span>{" "}
                          {employee.experience}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </>
          ) : (
            <p>No employee selected.</p>
          )}
        </div>
      )}
    </>
  );
}

export default EmployeeList1;
