import React from "react";

function Display({ customers, selectedCustomer,setSelectedCustomer }) {
    
  const customerInfo = selectedCustomer
    ? customers.find((customer) => customer.customerName === selectedCustomer)
    : null;

  return (
    <div>
      <strong>
        <select
          name="customerName"
          value={selectedCustomer || ""}
          onChange={(e) => setSelectedCustomer(e.target.value)}
        >
          <option value="">Select a customer</option>
          {customers.map((customer, index) => (
            <option key={index} value={customer.customerName}>
              {customer.customerName}
            </option>
          ))}
        </select>
      </strong>
      {customerInfo && (
        <div>
          <p>{customerInfo.address}</p>
          <p>{customerInfo.state}</p>
          <p>{customerInfo.phoneno}</p>
          <p>{customerInfo.gstin}</p>
        </div>
      )}
    </div>
  );
}

export { Display };