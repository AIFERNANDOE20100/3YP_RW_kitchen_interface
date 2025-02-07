import { useState } from "react";
import "./App.css";
import Navbar from "./components/navigation_bar/navbar.jsx";
import OrderBar from "./components/order_display_bar/order_display.jsx";

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

  return (
    <>
      <Navbar />
      {orders.map((order, index) => (
        <OrderBar key={index} order={order} />
      ))}
    </>
  );
}

export default App;
