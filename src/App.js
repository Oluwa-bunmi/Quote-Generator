import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [advice, setAdvice] = useState("");
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const advice = res.data.slip.advice;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="App">
      <div className="text-3xl">{advice}</div>
    </div>
  );
}

export default App;
