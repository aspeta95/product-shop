import Header from "./components/Header/Header";
import { PaginationProvider } from "./context/pagination";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import "./App.css";

function App() {
  return (
    <PaginationProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>

      <div className="debug">
        <span>
          Only products tagged 'Available' can be checked out to stripe (Stripe
          requires to add manually each product and this is a 100 product Json)
        </span>
      </div>
    </PaginationProvider>
  );
}

export default App;
