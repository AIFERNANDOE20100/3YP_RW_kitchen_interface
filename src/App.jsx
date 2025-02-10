import { useState } from "react";
import "./App.css";
import OrderBar from "./components/order_display_bar/current_display_bar/currrent_order_display.jsx";
import CompletedOrderBar from "./components/order_display_bar/completed_display_bar/completed_order_display.jsx";
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
    <div className="App">
      <Sidebar selected={selected} onSelect={setSelected} />
      
      <div className="orders">

        <h2>Current Orders</h2>
        {orders.map((order, index) => (
          <OrderBar key={index} order={order} />
        ))}

        <h2>Completed Orders</h2>
        {orders.map((order, index) => (
          <CompletedOrderBar key={index} order={order} />
        ))}

      </div>
    </div>
  );
}

export default App;
