import React, { useState, useEffect, useRef } from "react";
import "./GSTBilling.css";
import logoimg from "../components/kitakat Logo.png";
import { Display } from "./Display";

const GSTBilling = (props) => {
  const invoiceNoRef = useRef(props.invoiceNo);

  const [invoiceNo, setInvoiceNo] = useState(props.invoiceNo);

  const incrementInvoiceNo = () => {
    const numericPart = parseInt(invoiceNo.match(/\d+/)[0]);
    const newInvoiceNo = `${invoiceNo.replace(numericPart, "")}${(
      numericPart + 1
    ).toString()}`;

    invoiceNoRef.current = newInvoiceNo;

    setInvoiceNo(newInvoiceNo);
  };
  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customerInfo = selectedCustomer
    ? customers.find((customer) => customer.customerName === selectedCustomer)
    : null;

  const [submittedData, setSubmittedData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setCurrentDate(getCurrentDate());
  }, []);

  const [tableRows, setTableRows] = useState([
    { description: "", qty: "", unitPrice: "", totalAmount: 0 },
  ]);

  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [igst, setIgst] = useState(0);

  const handleAddRow = () => {
    const nextSno = tableRows.length + 1;

    setTableRows([
      ...tableRows,
      { sNo: nextSno, description: "", qty: "", unitPrice: "", totalAmount: 0 },
    ]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...tableRows];
    updatedRows.splice(index, 1);
    setTableRows(updatedRows);
  };

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const updatedRows = [...tableRows];
    updatedRows[index][field] = value;

    if (field === "qty" || field === "unitPrice") {
      const qty = parseFloat(updatedRows[index].qty) || 0;
      const unitPrice = parseFloat(updatedRows[index].unitPrice) || 0;
      updatedRows[index].totalAmount = qty * unitPrice;
    }

    setTableRows(updatedRows);
  };

  const calculateTotal = () => {
    return tableRows
      .reduce((total, row) => total + row.totalAmount, 0)
      .toFixed(2);
  };

  function convertNumberToWords(number) {
    const ones = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    if (number < 20) {
      return ones[number];
    }

    if (number < 100) {
      const remainder = number % 10;
      return (
        tens[Math.floor(number / 10)] +
        (remainder > 0 ? " " + ones[remainder] : "")
      );
    }

    if (number < 1000) {
      const remainder = number % 100;
      return (
        ones[Math.floor(number / 100)] +
        " Hundred" +
        (remainder > 0 ? " and " + convertNumberToWords(remainder) : "")
      );
    }

    if (number < 1000000) {
      const thousands = Math.floor(number / 1000);
      const remainder = number % 1000;
      return (
        convertNumberToWords(thousands) +
        " Thousand" +
        (remainder > 0 ? " " + convertNumberToWords(remainder) : "")
      );
    }

    return "Number too large to convert";
  }

  const calculateTotalInWords = () => {
    const totalAmount = calculateFinalTotal();
    return convertNumberToWords(parseFloat(totalAmount));
  };

  const handlePrint = () => {
    window.print();
    incrementInvoiceNo();
  };

  useEffect(() => {
    calculateCGST();
    calculateSGST();
    calculateIGST();
  }, [tableRows, props.cgstRate, props.sgstRate, props.igstRate]);

  const calculateCGST = () => {
    const totalAmount = parseFloat(calculateTotal());
    const cgstAmount = (totalAmount * (props.cgstRate / 100)).toFixed(2);
    setCgst(cgstAmount);
  };

  const calculateSGST = () => {
    const totalAmount = parseFloat(calculateTotal());
    const sgstAmount = (totalAmount * (props.sgstRate / 100)).toFixed(2);
    setSgst(sgstAmount);
  };

  const calculateIGST = () => {
    const totalAmount = parseFloat(calculateTotal());
    const igstAmount = (totalAmount * (props.igstRate / 100)).toFixed(2);
    setIgst(igstAmount);
  };

  const calculateFinalTotal = () => {
    const totalAmount = parseFloat(calculateTotal());
    const finalTotal = totalAmount + parseFloat(cgst) + parseFloat(sgst);
    return finalTotal.toFixed(2);
  };

  return (
    <>
      <div className="billing">
        <div className="bill1">
          <h1>ESTIMATED BILL</h1>
          <h3>KITKAT SOFTWARE TECHNOLOGIES</h3>
        </div>
        <div className="bill2">
          <h4>
            No: 70/77 , 1st Floor, Krishna complex, PN Palayam <br />
            Coimbatore-641037 <br />
            Phone No : 7010816299 , 04224957272.
          </h4>
        </div>

        <br />

        <div className="bill3">
          <h3>INVOICE TO:</h3>
          <Display
            customers={customers}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
            handleInputChange={handleInputChange}
          />
        </div>
        {submittedData && !isFormVisible && (
          <div className="bill10">
            <p> {submittedData.invoiceName}</p>
            <p> {submittedData.invoiceDoorno}</p>
            <p> {submittedData.invoiceStreet}</p>
            <p> {submittedData.invoiceDistrict}</p>
          </div>
        )}

        <div className="bill4">
          <img src={logoimg} alt="logo" />
        </div>

        <div className="bill5">
          <input
            className="inputbill"
            type="date"
            id="date"
            name="date"
            value={currentDate}
          />
          <p className="p1">
            <span className="span">INVOICE NO:</span>
            {invoiceNo}
          </p>
          <p className="p1">
            <span className="span1">GSTIN:</span>33BIQPA2943B1ZQ
          </p>
        </div>

        <div className="bill6">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Description</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      name={`description${index}`}
                      value={row.description}
                      onChange={(event) =>
                        handleInputChange(event, index, "description")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name={`qty${index}`}
                      value={row.qty}
                      onChange={(event) =>
                        handleInputChange(event, index, "qty")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name={`unitPrice${index}`}
                      value={row.unitPrice}
                      onChange={(event) =>
                        handleInputChange(event, index, "unitPrice")
                      }
                    />
                  </td>
                  <td>{row.totalAmount.toFixed(2)}</td>
                  <td>
                    {index === tableRows.length - 1 ? (
                      <button className="btn" onClick={handleAddRow}>
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => handleDeleteRow(index)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td>{calculateTotal()}</td>
                <td></td>
              </tr>
              {customerInfo?.state === "Tamilnadu" ? (
                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>CGST {props.cgstRate}%</td>
                    <td>{cgst}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>SGST {props.sgstRate}%</td>
                    <td>{sgst}</td>
                    <td></td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>IGST {props.igstRate}%</td>
                    <td>{igst}</td>
                    <td></td>
                  </tr>
                </>
              )}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Final Total</td>
                <td>{calculateFinalTotal()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bill8">
          <p>TOTAL (In Words) : {calculateTotalInWords()} only</p>
        </div>

        <div className="bill9">
          <button onClick={handlePrint}>Print</button>
        </div>
        <div className="bill10">
          <h3>Bank Account Details</h3>
          <p>
            <strong>Bank </strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            :&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>Federal Bank</span>
          </p>
          <p>
            <strong>Account No </strong>&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>
              19829200003697
            </span>{" "}
          </p>
          <p>
            <strong>IFSC Code </strong>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>FDRL0001982 </span>
          </p>
          <p>
            <strong>Branch </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            :&nbsp;&nbsp;
            <span style={{ fontFamily: "sans-serif" }}>
              Papanaickenpalayam.
            </span>
          </p>
        </div>
        <div className="bill7">
          <h4>THANK YOU FOR YOU BUSINESS!</h4>
        </div>
      </div>
      <style>{`
        @media print {
          .add-item, .sidebar { display: none; }
          .billing { max-width: 100%; height: auto; }
          .bill2, .logo-box { display: none; }
          .bill4 { text-align: center; margin-top: -200px; margin-left: 350px; }
          .logo { max-width: 100%; height: auto; }
          .bill7 { margin-left: 60px; margin-top: 300px; }
          .bill9 { display: none; }
        }
      `}</style>
    </>
  );
};

export default GSTBilling;
