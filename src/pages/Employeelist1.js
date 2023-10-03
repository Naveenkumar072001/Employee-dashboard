import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Employeelist.css";

function EmployeeList1({ employees, onDeleteEmployee, onUpdateEmployee }) {
  const [searchInput, setSearchInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [viewEmployeeId, setViewEmployeeId] = useState(null);

  // Filter employees based on the search input
  const filteredEmployees1 = employees.filter((employee) => {
    const searchValue = searchInput.toLowerCase();
    return (
      employee.firstname.toLowerCase().includes(searchValue) ||
      employee.lastname.toLowerCase().includes(searchValue) ||
      employee.contact.includes(searchValue)
    );
  });

  const handleSaveClick = (editedEmployee, index) => {
    onUpdateEmployee(editedEmployee, index); // Call the update function with updated data and index
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
          <input
            type="text"
            placeholder="Search by name or contact"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      ) : (
        <button onClick={handleBackToEmployeeListClick}>
          Back to employee List
        </button>
      )}

      {viewEmployeeId === null ? (
        <div>
          <h2>EMPLOYEE LIST</h2>
          <div className="box">
            <Link className="one" to="/EmployeeList">
              <i class="fa-solid fa-users"></i>
              <h2>View Studentlist</h2>
            </Link>
            <Link className="two" to="/EmployeeList1">
              <i class="fa-solid fa-users"></i>
              <h2>View Employeelist</h2>
            </Link>
          </div>
          
          <table className="EmployeeTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees1.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
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
                      <>
                        <button
                          onClick={() => handleSaveClick(editedEmployee, index)}
                        >
                          Save
                        </button>
                        <button onClick={handleCancelClick}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(employee)}>
                        Edit
                      </button>
                    )}

                    {viewEmployeeId === null ? (
                      <button onClick={() => handleViewClick(employee.id)}>
                        View
                      </button>
                    ) : null}
                    <button onClick={() => onDeleteEmployee(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>Employee Details</h2>

          {viewEmployeeId !== null ? (
            <>
              {employees.map((employee) => {
                if (employee.id === viewEmployeeId) {
                  return (
                    <div key={employee.id} className="student-details">
                      <div className="student-photo">
                        {employee.photo && (
                          <img
                            src={employee.photo}
                            alt={`${employee.firstname} ${employee.lastname}`}
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
