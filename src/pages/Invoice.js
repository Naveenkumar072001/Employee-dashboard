import React from "react";

const InvoiceMaster = (props) => {
  const handleUpdateInvoiceNo = () => {
    const newInvoiceNo = document.getElementById("invoiceNoInput").value;
    const newCGSTRate = document.getElementById("cgstInput").value;
    const newSGSTRate = document.getElementById("sgstInput").value;
    const newIGSTRate = document.getElementById("igstInput").value;

    props.setInvoiceNo(newInvoiceNo);
    props.setCGSTRate(newCGSTRate);
    props.setSGSTRate(newSGSTRate);
    props.setIGSTRate(newIGSTRate);

    alert("Invoice Number, CGST Rate, and SGST Rate Updated Successfully");
  };

  return (
    <div>
      <h1>Invoice Master</h1>
      <label>Invoice No:</label>
      <input id="invoiceNoInput" type="text" placeholder="Enter Invoice No" />
      <label>CGST Rate:</label>
      <input id="cgstInput" type="text" placeholder="Enter CGST Rate" />
      <label>SGST Rate:</label>
      <input id="sgstInput" type="text" placeholder="Enter SGST Rate" />
      <label>GST Rate:</label>
      <input id="igstInput" type="text" placeholder="Enter IGST Rate" />
      <button onClick={handleUpdateInvoiceNo}>Update</button>
    </div>
  );
};

export default InvoiceMaster;
