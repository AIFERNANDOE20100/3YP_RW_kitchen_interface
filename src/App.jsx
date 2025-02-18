import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import BrowserRouter
import "./App.css";
import OrderBar from "./components/order_display_bar/current_display_bar/currrent_order_display.jsx";
import CompletedOrderBar from "./components/order_display_bar/completed_display_bar/completed_order_display.jsx";
import Sidebar from "./components/side_option_bar/sidebar.jsx";
import HistoryPage from "./components/history_page/history_page.jsx";

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

  const [selected, setSelected] = useState("current");

  return (
    <Router> {/* ✅ Wrap inside BrowserRouter */}
      <div className="App">
        <Sidebar selected={selected} onSelect={setSelected} />

        <Routes>
          {/* Default view: Current and Completed Orders */}
          <Route
            path="/"
            element={
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
            }
          />

          {/* History Page */}
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
