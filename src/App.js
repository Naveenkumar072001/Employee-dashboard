import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import GSTBilling from "./pages/GSTBilling";
import { NonGST } from "./pages/Non-GSTBilling";
import "./pages/Employeedetails.css";
import AddEmployee from "./pages/EmployeeDetails";
import EmployeeList from "./pages/Employeelist";
import EmployeeList1 from "./pages/Employeelist1";
import AddEmployee1 from "./pages/EmployeeDetials1";
import AttendanceForm from "./pages/Attendanceform";
import ViewAttendance from "./pages/viewattendance";
import PaymentDetails from "./pages/Cashin"
import Customer from "./pages/Customer";
import { Display } from "./pages/Display";
import InvoiceMaster from "./pages/Invoice";

const App = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [lastEmployeeId, setLastEmployeeId] = useState(0);
  const [employees1, setEmployees1] = useState([]);
  const [lastEmployeeId1, setLastEmployeeId1] = useState(0);
  const [attendanceRecords, setAttendanceRecords] = useState([]); 
  const [customerData, setCustomerData] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState("KIT/23/008");
  const [cgstRate, setCGSTRate] = useState(9);
  const [sgstRate, setSGSTRate] = useState(9);
  const [igstRate, setIGSTRate] = useState(18); 

  const handleCustomerCreate = (customer) => {
    setCustomerData([...customerData, customer]);
  };
  const handleAttendanceSubmit = (attendanceRecord) => {
    setAttendanceRecords([...attendanceRecords, attendanceRecord]);
  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = [...attendanceRecords];
    updatedRecords.splice(index, 1); 
    setAttendanceRecords(updatedRecords);
  };

  const handleAddEmployee = (newEmployee) => {
    const newEmployeeId = lastEmployeeId + 1;
    setEmployees([
      ...employees,
      { ...newEmployee, id: `STU${newEmployeeId.toString().padStart(3, "0")}` },
    ]);
    setLastEmployeeId(newEmployeeId);

   
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
        id: `EMP${newEmployeeId1.toString().padStart(3, "0")}`,
      },
    ]);
    setLastEmployeeId1(newEmployeeId1);

   
    localStorage.setItem(
      "employees1",
      JSON.stringify([...employees1, newEmployee1])
    );
    localStorage.setItem("lastEmployeeId1", newEmployeeId1.toString());
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);

    let highestId = 0;
    updatedEmployees.forEach((employee) => {
      const employeeIdNumber = parseInt(employee.id.substr(3));
      if (employeeIdNumber > highestId) {
        highestId = employeeIdNumber;
      }
    });

    setLastEmployeeId(highestId);

    setEmployees(updatedEmployees);

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem("lastEmployeeId", highestId.toString());
  };

  const handleDeleteEmployee1 = (index) => {
    const updatedEmployees1 = employees1.filter((_, i) => i !== index);

    let highestId = 0;
    updatedEmployees1.forEach((employee) => {
      const employeeIdNumber1 = parseInt(employee.id.substr(3));
      if (employeeIdNumber1 > highestId) {
        highestId = employeeIdNumber1;
      }
    });

    setLastEmployeeId1(highestId);

    setEmployees1(updatedEmployees1);

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
    const savedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }

    const savedLastEmployeeId = localStorage.getItem("lastEmployeeId");
    if (savedLastEmployeeId) {
      setLastEmployeeId(parseInt(savedLastEmployeeId));
    } else {
      setLastEmployeeId(0);
    }
  }, []);
  useEffect(() => {
    const savedEmployees1 = JSON.parse(localStorage.getItem("employees1"));
    if (savedEmployees1) {
      setEmployees1(savedEmployees1);
    }

    const savedLastEmployeeId1 = localStorage.getItem("lastEmployeeId1");
    if (savedLastEmployeeId1) {
      setLastEmployeeId1(parseInt(savedLastEmployeeId1));
    } else {
      setLastEmployeeId1(0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
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
                setCurrentBalance={setCurrentBalance}
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
                setCurrentBalance={setCurrentBalance}
              />
            }
          />

          <Route
            path="/AttendanceForm"
            element={
              <AttendanceForm
                employees={employees}
                onAttendanceSubmit={handleAttendanceSubmit}
                setCurrentBalance={setCurrentBalance}
              />
            }
          />
          <Route
            path="/ViewAttendance"
            element={
              <ViewAttendance
                attendanceRecords={attendanceRecords}
                onDeleteRecord={handleDeleteRecord}
              />
            }
          />
           <Route path="/cashin" element={<PaymentDetails employees={employees}/>}/>


          <Route
            path="/gstbilling"
            element={
              <GSTBilling
                invoiceNo={invoiceNo}
                cgstRate={cgstRate}
                sgstRate={sgstRate}
                igstRate={igstRate}
                setCGSTRate={setCGSTRate}
                setSGSTRate={setSGSTRate}
                setIGSTRate={setIGSTRate}
              />
            }
          />
          <Route path="/nongstbilling" element={<NonGST />} />
          
         
          
          <Route
            path="customer"
            element={<Customer onCustomerCreate={handleCustomerCreate} />}
          />
          
          <Route path="display" element={<Display />} />
          <Route
            path="invoice"
            element={
              <InvoiceMaster
                invoiceNo={invoiceNo}
                setInvoiceNo={setInvoiceNo}
                setCGSTRate={setCGSTRate}
                setSGSTRate={setSGSTRate}
                setIGSTRate={setIGSTRate}
              />
            }
          />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
