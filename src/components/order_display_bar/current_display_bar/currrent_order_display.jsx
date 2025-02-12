import React, { useState } from "react";
import "./current_order_display.css";
import CustomButton from "../../buttons/custom_button.jsx";

const OrderBar = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`order-bar ${expanded ? "expanded" : ""}`}>
      {/* Order Number and Menu Number */}
      <div className="order-info">
        <strong className="Order-No">Order No:</strong> {order.orderNumber}
      </div>
      <div className="menu-info">
        <strong className="Menu-No">Menu No:</strong> {order.menuNumber}
      </div>

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

      {/* Completion button */}
      <CustomButton label="Done" bgColor="green" textColor="white" borderRadius={10} padding={10}/>

      {/* Extra Order Details (Visible When Expanded) */}
      {expanded && (
        <div className="extra-details">
          <p><strong>Order Time:</strong> {order.orderTime}</p>
          <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
        </div>
      )}
    </div>
  );
};

export default OrderBar;