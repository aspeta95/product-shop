import Header from "./components/Header/Header";
import { PaginationProvider } from "./context/pagination";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <PaginationProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </BrowserRouter>
    </PaginationProvider>
  );
}

export default App;
