import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homescreens from "./screen/Homescreens";
import ProductScreen from "./screen/ProductScreen";
import Auth from "./screen/Auth";
import CartScreen from "./screen/CartScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Container className="py-5">
            <Routes>
              <Route path="/" exact element={<Homescreens/>} />
              <Route path="/product/:id" exact element={<ProductScreen/>} />
              <Route path="/cart" exact element={<CartScreen/>} />
              <Route path="/login" exact element={<Auth/>} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
