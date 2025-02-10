import React, { useState } from "react";
import "./completed_order_display.css";

const CompletedOrderBar = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`order-bar ${expanded ? "expanded" : ""}`}>
      {/* Order Number and Menu Number */}
      <div className="order-info">{order.orderNumber}</div>
      <div className="menu-info">{order.menuNumber}</div>

      {/* Item Details */}
      <div className="item-details">
        <div className="item-name">{order.itemName}</div>
        <div className="special-instruction">{order.specialInstruction}</div>
        <div className="customer-details">{order.customerDetails}</div>
      </div>

      {/* More Button (Toggle Expansion) */}
      <div 
        className={`more-button ${expanded ? "rotated" : ""}`} 
        onClick={() => setExpanded(!expanded)}
      >
        &#9660;
      </div>

      {/* Undo Button */}
      <button className="undo-button">Undo</button>

      {/* Extra Order Details (Visible When Expanded) */}
      {expanded && (
        <div className="extra-details">
          <p><strong>Order Time:</strong> {order.orderTime}</p>
          <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
          <p><strong>Additional Notes:</strong> {order.additionalNotes}</p>
        </div>
      )}
    </div>
  );
};

export default CompletedOrderBar;
