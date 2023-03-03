import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App h-full bg-city bg-cover bg-center flex items-center justify-center text-center">
      <Home />
    </div>
  );
}

export default App;
