import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import "./pages/Employeedetails.css";
import AddEmployee from "./pages/EmployeeDetails";
import EmployeeList from "./pages/Employeelist";
import Employee from "./pages/Employee";
import EmployeeList1 from "./pages/Employeelist1";
import AddEmployee1 from "./pages/Employeedeials1";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [lastEmployeeId, setLastEmployeeId] = useState(0);
  const [employees1, setEmployees1] = useState([]);
  const [lastEmployeeId1, setLastEmployeeId1] = useState(0);

  const handleAddEmployee = (newEmployee) => {
    const newEmployeeId = lastEmployeeId + 1;
    setEmployees([
      ...employees,
      { ...newEmployee, id: `STU${newEmployeeId.toString().padStart(3, "0")}` },
    ]);
    setLastEmployeeId(newEmployeeId);

    // Save the updated employees list and lastEmployeeId to local storage
    localStorage.setItem(
      "employees",
      JSON.stringify([...employees, newEmployee])
    );
    localStorage.setItem("lastEmployeeId", newEmployeeId.toString());
  };

  const handleAddEmployee1 = (newEmployee1) => {
    const newEmployeeId1 = lastEmployeeId1 + 1;
    setEmployees1([
      ...employees1,
      {
        ...newEmployee1,
        id: `STU${newEmployeeId1.toString().padStart(3, "0")}`,
      },
    ]);
    setLastEmployeeId1(newEmployeeId1);

    // Save the updated employees list and lastEmployeeId to local storage
    localStorage.setItem(
      "employees1",
      JSON.stringify([...employees1, newEmployee1])
    );
    localStorage.setItem("lastEmployeeId1", newEmployeeId1.toString());
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);

    // Find the highest ID among remaining employees
    let highestId = 0;
    updatedEmployees.forEach((employee) => {
      const employeeIdNumber = parseInt(employee.id.substr(3));
      if (employeeIdNumber > highestId) {
        highestId = employeeIdNumber;
      }
    });

    // Set the lastEmployeeId to the highest ID
    setLastEmployeeId(highestId);

    // Update the employees list
    setEmployees(updatedEmployees);

    // Save the updated employees list and lastEmployeeId to local storage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem("lastEmployeeId", highestId.toString());
  };

  const handleDeleteEmployee1 = (index) => {
    const updatedEmployees1 = employees1.filter((_, i) => i !== index);

    // Find the highest ID among remaining employees
    let highestId = 0;
    updatedEmployees1.forEach((employee) => {
      const employeeIdNumber1 = parseInt(employee.id.substr(3));
      if (employeeIdNumber1 > highestId) {
        highestId = employeeIdNumber1;
      }
    });

    // Set the lastEmployeeId to the highest ID
    setLastEmployeeId1(highestId);

    // Update the employees list
    setEmployees1(updatedEmployees1);

    // Save the updated employees list and lastEmployeeId to local storage
    localStorage.setItem("employees1", JSON.stringify(updatedEmployees1));
    localStorage.setItem("lastEmployeeId1", highestId.toString());
  };

  const onUpdateEmployee = (editedEmployee, index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index] = editedEmployee;
    setEmployees(updatedEmployees);
  };

  const onUpdateEmployee1 = (editedEmployee, index) => {
    const updatedEmployees1 = [...employees1];
    updatedEmployees1[index] = editedEmployee;
    setEmployees1(updatedEmployees1);
  };

  useEffect(() => {
    // Load employees from local storage on component mount
    const savedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }

    // Load the last assigned employee ID from local storage on component mount
    const savedLastEmployeeId = localStorage.getItem("lastEmployeeId");
    if (savedLastEmployeeId) {
      setLastEmployeeId(parseInt(savedLastEmployeeId));
    } else {
      // If it's not found in local storage, set it to 0
      setLastEmployeeId(0);
    }
  }, []);
  useEffect(() => {
    // Load employees from local storage on component mount
    const savedEmployees1 = JSON.parse(localStorage.getItem("employees1"));
    if (savedEmployees1) {
      setEmployees1(savedEmployees1);
    }

    // Load the last assigned employee ID from local storage on component mount
    const savedLastEmployeeId1 = localStorage.getItem("lastEmployeeId1");
    if (savedLastEmployeeId1) {
      setLastEmployeeId1(parseInt(savedLastEmployeeId1));
    } else {
      // If it's not found in local storage, set it to 0
      setLastEmployeeId1(0);
    }
  }, []);

  useEffect(() => {
    // Save employees to local storage whenever it changes
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    // Save employees to local storage whenever it changes
    localStorage.setItem("employees1", JSON.stringify(employees1));
  }, [employees1]);

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard employees={employees} employees1={employees1} />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/EmployeeDetails"
            element={<AddEmployee onAddEmployee={handleAddEmployee} />}
          />
          <Route
            exact
            path="/EmployeeDetails1"
            element={<AddEmployee1 onAddEmployee1={handleAddEmployee1} />}
          />

          <Route
            path="/EmployeeList"
            element={
              <EmployeeList
                employees={employees}
                onDeleteEmployee={handleDeleteEmployee}
                onUpdateEmployee={onUpdateEmployee}
              />
            }
          />
          <Route
            path="/EmployeeList1"
            element={
              <EmployeeList1
                employees={employees1}
                onDeleteEmployee={handleDeleteEmployee1}
                onUpdateEmployee={onUpdateEmployee1}
              />
            }
          />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
