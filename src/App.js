import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
function App() {
  return (
    <div className="App h-full bg-city bg-cover bg-center flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
