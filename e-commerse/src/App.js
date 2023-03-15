import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/navbar";

import { TheShop } from "./Pages/tillfjälls/theShop";
import { Cart } from "./Pages/cart/cart";
import { TheShopContextProvider } from "./context/theShopContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TheShopContextProvider>
        <Router>
          {/* Navbar is placed here so that it will be available in every route (path/page) */}
          <Navbar />
          <Routes>
            {/* MAINPAGE */}
            <Route path="/" element={<TheShop />}></Route>

            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </TheShopContextProvider>
    </div>
  );
}

export default App;
