import React, { FC, useState } from "react";
import "./App.css";

import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header";
import SignInWrapper from "./components/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedInSelector } from "./redux/selectors";
import { signIn } from "./redux/actions";
import { ROUTES } from "./routes";
import UserPage from "./components/UserPage";

const App: FC = () => {
  const isLoggedIn = useSelector(getIsLoggedInSelector);
  const dispatch = useDispatch();

  if (localStorage.getItem("token")) {
    dispatch(signIn());
  }

  console.log("IS LOGGED IN", isLoggedIn);
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.USERPAGE} element={<UserPage />} />
            {/* <Route path="/signin" element={<SignInWrapper />} /> */}
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
