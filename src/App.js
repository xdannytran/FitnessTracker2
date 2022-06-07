import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
