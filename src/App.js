import { useState, useEffect } from "react";
import axios from "axios";
// import city from "./assets/city.jpg";
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
    <div className="App h-full bg-city bg-cover bg-center flex items-center justify-center text-center">
      <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <div className="text-[whitesmoke]"><h1 className="text-3xl">{advice}</h1></div>
      </div>
    </div>
  );
}

export default App;
