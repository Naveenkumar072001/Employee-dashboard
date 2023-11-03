import React, { useState, useEffect } from "react";

function Customer() {
  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );

  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    address: "",
    date: "",
    state: "",
    phoneno: "",
    gstin: "33BIQPA2943B1ZQ",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleCreate = () => {
    setCustomers([...customers, customerInfo]);
    setCustomerInfo({
      customerName: "",
      address: "",
      date: "",
      state: "",
      phoneno: "",
      gstin: "33BIQPA2943B1ZQ",
    });
  };
  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  return (
    <>
      <div>
        <h2>Create Customer</h2>
        <form>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={customerInfo.customerName}
            onChange={handleInputChange}
          />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={customerInfo.address}
            onChange={handleInputChange}
          />

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={customerInfo.date}
            onChange={handleInputChange}
          />
          <br />
          <label>Invoice No:</label>
          <select
            name="state"
            value={customerInfo.state}
            onChange={handleInputChange}
          >
            <option value="">Select a state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Tamilnadu">Tamilnadu</option>
          </select>
          <br />
          <label>PhoneNo:</label>
          <input
            type="number"
            name="phoneno"
            value={customerInfo.phoneno}
            onChange={handleInputChange}
          />
          <label>GSTIN:</label>
          <input
            type="text"
            name="gstin"
            value={customerInfo.gstin}
            onChange={handleInputChange}
          />

          <button type="button" onClick={handleCreate}>
            Create
          </button>
        </form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <h2>Customer List</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>State</th>
              <th>PhoneNo</th>
              <th>GSTIN</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.customerName}</td>
                <td>{customer.address}</td>
                <td>{customer.date}</td>
                <td>{customer.state}</td>
                <td>{customer.phoneno}</td>
                <td>{customer.gstin}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Customer;
