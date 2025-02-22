import React from 'react';
import { useLocation } from 'react-router-dom';
import './EBill.css';

const EBill = () => {
  const location = useLocation();
  const { checkoutData } = location.state || {}; // Get checkout data from location state

  // Function to handle print functionality
  const handlePrint = () => {
    window.print(); // This triggers the browser's print dialog
  };

  return (
    <div className="e-bill-container">
      <h2 className="e-bill-title">E-Bill</h2>
      <table className="e-bill-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {checkoutData?.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Print Button */}
      <div className="print-button-container">
        <button onClick={handlePrint} className="print-button">
          Print E-Bill
        </button>
      </div>
    </div>
  );
};

export default EBill;