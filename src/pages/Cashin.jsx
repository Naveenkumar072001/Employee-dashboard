import React, { useState } from "react";


function PaymentDetails({ employees }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showPaymentDetails, setShowPaymentDetails] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [selectedBankName, setSelectedBankName] = useState("");
  const [selectedOnlineMethod, setSelectedOnlineMethod] = useState(null);
  const [selectedOnlineBank, setSelectedOnlineBank] = useState(null);
  const [selectedPhonePayBank, setSelectedPhonePayBank] = useState(null);
  const [selectedPaytmBank, setSelectedPaytmBank] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [bankPaymentPage, setBankPaymentPage] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handlePayNowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowPaymentDetails(false);
    setIsPaid(false);
    setBankPaymentPage(true);
    setSelectedPaymentMethod("G-PAY");
    setSelectedOnlineBank(null);
    setSelectedPhonePayBank(null);
    setSelectedPaytmBank(null);
    setPaymentConfirmed(false);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setIsPaid(false);
    setBankPaymentPage(false);
    setSelectedOnlineMethod(null);
    setSelectedOnlineBank(null);
    setSelectedPhonePayBank(null);
    setSelectedPaytmBank(null);
    setPassword("");
    setPaymentConfirmed(false);
  };

  const handleOnlineMethodChange = (event) => {
    const method = event.target.value;
    setSelectedOnlineMethod(method);
    setSelectedOnlineBank(null);
    setSelectedPhonePayBank(null);
    setSelectedPaytmBank(null);
    setPassword("");
    setPaymentConfirmed(false);
  };

  const handleOnlineBankChange = (event) => {
    const selectedBank = event.target.value;
    setSelectedOnlineBank(selectedBank);
  };

  const handlePhonePayBankChange = (event) => {
    setSelectedPhonePayBank(event.target.value);
    setSelectedPaytmBank(null);
    setPaymentConfirmed(false);
  };

  const handlePaytmBankChange = (event) => {
    setSelectedPaytmBank(event.target.value);
    setSelectedPhonePayBank(null);
    setPaymentConfirmed(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordCorrect(true);
    setPaymentConfirmed(false);
  };

  const handleVerifyPassword = () => {
    const correctPassword = "your_password";
    if (password === correctPassword) {
      setPasswordVerified(true);
      setPaymentConfirmed(true);
    } else {
      setIsPasswordCorrect(false);
      setPaymentConfirmed(false);
    }
  };

  const handleBankPayment = () => {
    if (selectedPaymentMethod === "Cash") {
      setTimeout(() => {
        setIsPaid(true);


      setShowSuccessNotification(true);

      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 3000);
    }, 3000);
  } else {
      setTimeout(() => {
        if (paymentConfirmed) {
          setIsPaid(true);
          setPaymentConfirmed(false); 

          setShowSuccessNotification(true);

          setTimeout(() => {
            setShowSuccessNotification(false);
          }, 3000);
        }
      }, 3000);
    }
  };

  const handleBackToPaymentDetails = () => {
    setSelectedEmployee(null);
    setSelectedPaymentMethod(null);
    setShowPaymentDetails(true);
    setIsPaid(false);
    setBankPaymentPage(false);
    setSelectedOnlineMethod(null);
    setSelectedOnlineBank(null);
    setSelectedPhonePayBank(null);
    setSelectedPaytmBank(null);
    setPassword("");
    setPasswordVerified(false);
    setIsPasswordCorrect(true);
    setPaymentConfirmed(false);
  };

  const generateRandomBankNames = (count) => {
    const bankNames = [
      "Bank of Baroda",
      "Bank of India",
      "Bank of Maharashtra",
      "Canara Bank",
      "Central Bank of India",
      "Indian Bank",
      "Indian Overseas Bank",
      "Punjab and Sind Bank",
      "Punjab National Bank",
      "Union Bank of India"
    ];
    return shuffleArray(bankNames).slice(0, count);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const filteredEmployees = employees.filter((employee) => employee.remainingAmount > 0);

  return (
    <div className="page-container">
      <h2 className="page-title">Payment Page</h2>
      {isPaid ? (
        <div className="overlay">
          <div className="notification-popup">
            <p className="tick-mark">&#10004;</p>
            <p className="paid-success">Paid Successfully</p>
            <button onClick={handleBackToPaymentDetails} className="done-button">
              DONE
            </button>
          </div>
        </div>
      ) : (
        <>
          {showPaymentDetails ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Receipt Type</th>
                  <th>Paying Amount</th>
                  <th>Remaining Amount</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>cash-in</td>
                    <td>{employee.paidAmount}</td>

                    <td>{employee.remainingAmount}</td>
                    <td>
                      <button onClick={() => handlePayNowClick(employee)}>Pay Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
          {selectedEmployee && (
            <div className={`payment-details ${isPaid ? "paid" : ""}`}>
              <h3>Payment Details for {selectedEmployee.name}</h3>
              <p>Remaining Amount: {selectedEmployee.remainingAmount}</p>
              <div>
                <label>Select Payment Method:</label>
                <div className="payment-method">
                  <label>
                    <input
                      type="radio"
                      value="Cash"
                      checked={selectedPaymentMethod === "Cash"}
                      onChange={handlePaymentMethodChange}
                    />
                    Cash
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Bank"
                      checked={selectedPaymentMethod === "Bank"}
                      onChange={handlePaymentMethodChange}
                    />
                    Bank
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Online"
                      checked={selectedPaymentMethod === "Online"}
                      onChange={handlePaymentMethodChange}
                    />
                    Online
                  </label>
                </div>
              </div>

              {selectedPaymentMethod === "Cash" ? (
                <div>
                  <button onClick={handleBankPayment} className="pay-button">
                    Pay
                  </button>
                </div>
              ) : selectedPaymentMethod === "Bank" ? (
                <div>
                  <h3>Select Bank</h3>
                  <div>
                    <label>Select a bank:</label>
                    <select
                      onChange={handleOnlineBankChange}
                      value={selectedOnlineBank}
                    >
                      <option value="" disabled>
                        Select a bank
                      </option>
                      {generateRandomBankNames(10).map((bank, index) => (
                        <option key={index} value={bank}>
                          {bank}
                        </option>
                      ))}
                    </select>
                  </div>
                  {passwordVerified ? (
                    <button onClick={handleBankPayment} className="pay-button">
                      Pay
                    </button>
                  ) : (
                    <div>
                      <label>Enter Password:</label> 
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {!isPasswordCorrect ? (
                        <p className="password-error">Incorrect password. Please try again.</p>
                      ) : null}
                      <button onClick={handleVerifyPassword}>Verify Password</button>
                    </div>
                  )}
                </div>
              ) : selectedPaymentMethod === "Online" ? (
                <div>
                  <label>Select Online Payment Method:</label>
                  <div className="online-payment-method">
                    <label>
                      <input
                        type="radio"
                        value="G-PAY"
                        checked={selectedOnlineMethod === "G-PAY"}
                        onChange={handleOnlineMethodChange}
                      />
                      G-PAY
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="PHONE-PAY"
                        checked={selectedOnlineMethod === "PHONE-PAY"}
                        onChange={handleOnlineMethodChange}
                      />
                      PHONE-PAY
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="PAYTM"
                        checked={selectedOnlineMethod === "PAYTM"}
                        onChange={handleOnlineMethodChange}
                      />
                      PAYTM
                    </label>
                  </div>
                  {selectedOnlineMethod === "G-PAY" ? (
                    <div>
                      <label>Select a bank for G-PAY:</label>
                      <select
                        onChange={handleOnlineBankChange}
                        value={selectedOnlineBank}
                      >
                        <option value="" disabled>
                          Select a bank
                        </option>
                        {generateRandomBankNames(10).map((bank, index) => (
                          <option key={index} value={bank}>
                            {bank}
                          </option>
                        ))}
                      </select>
                      <div>
                        <label>Enter Password:</label> 
                        <input
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {!isPasswordCorrect ? (
                          <p className="password-error">Incorrect password. Please try again.</p>
                        ) : null}
                        <button onClick={handleVerifyPassword}>Verify Password</button>
                      </div>
                      {passwordVerified && (
                        <div>
                          <p>G-PAY details</p>
                          <button onClick={handleBankPayment} className="pay-button">
                            Pay
                          </button>
                        </div>
                      )}
                    </div>
                  ) : selectedOnlineMethod === "PHONE-PAY" ? (
                    <div>
                      <label>Select a bank for PHONE-PAY:</label>
                      <select
                        onChange={handlePhonePayBankChange}
                        value={selectedPhonePayBank}
                      >
                        <option value="" disabled>
                          Select a bank
                        </option>
                        {generateRandomBankNames(10).map((bank, index) => (
                          <option key={index} value={bank}>
                            {bank}
                          </option>
                        ))}
                      </select>
                      <div>
                        <label>Enter Password:</label> 
                        <input
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {!isPasswordCorrect ? (
                          <p className="password-error">Incorrect password. Please try again.</p>
                        ) : null}
                        <button onClick={handleVerifyPassword}>Verify Password</button>
                      </div>
                      {passwordVerified && (
                        <div>
                          <p>PHONE-PAY details</p>
                          <button onClick={handleBankPayment} className="pay-button">
                            Pay
                          </button>
                        </div>
                      )}
                    </div>
                  ) : selectedOnlineMethod === "PAYTM" ? (
                    <div>
                      <label>Select a bank for PAYTM:</label>
                      <select
                        onChange={handlePaytmBankChange}
                        value={selectedPaytmBank}
                      >
                        <option value="" disabled>
                          Select a bank
                        </option>
                        {generateRandomBankNames(10).map((bank, index) => (
                          <option key={index} value={bank}>
                            {bank}
                          </option>
                        ))}
                      </select>
                      <div>
                        <label>Enter Password:</label> 
                        <input
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {!isPasswordCorrect ? (
                          <p className="password-error">Incorrect password. Please try again.</p>
                        ) : null}
                        <button onClick={handleVerifyPassword}>Verify Password</button>
                      </div>
                      {passwordVerified && (
                        <div>
                          <p>PAYTM details</p>
                          <button onClick={handleBankPayment} className="pay-button">
                            Pay
                          </button>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PaymentDetails;
