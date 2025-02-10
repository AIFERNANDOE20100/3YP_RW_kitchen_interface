import { useState } from "react";
import "./App.css";
import Navbar from "./components/navigation_bar/navbar.jsx";
import OrderBar from "./components/order_display_bar/order_display.jsx";
import CompletedOrderBar from "./components/order_display_bar/completed_display_bar/completed_order_display.jsx";
import CustomButton from "./components/buttons/CustomButton.jsx"; // Import Custom Button
import Sidebar from "./components/side_option_bar/sidebar.jsx";

function App() {
  const [orders, setOrders] = useState([
    {
      orderNumber: "123",
      menuNumber: "5",
      itemName: "Burger",
      specialInstruction: "No onions",
      customerDetails: "John Doe, Table 4",
    },
    {
      orderNumber: "124",
      menuNumber: "10",
      itemName: "Pasta",
      specialInstruction: "Extra cheese",
      customerDetails: "Jane Smith, Table 7",
    },
  ]);

  // Button Click Handler
  const handleButtonClick = () => {
    alert("Custom Button Clicked!");
  };

  const [selected, setSelected] = useState("current");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar selected={selected} onSelect={setSelected} />
      
      <div style={{ flex: 1, padding: "20px" }}>
        <Navbar />

        <h2>Current Orders</h2>
        {orders.map((order, index) => (
          <OrderBar key={index} order={order} />
        ))}

        <h2>Completed Orders</h2>
        {orders.map((order, index) => (
          <CompletedOrderBar key={index} order={order} />
        ))}

        {/* Custom Button */}
        <div className="button-container">
          <CustomButton text="Add Order" color="green" size="18px" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;

