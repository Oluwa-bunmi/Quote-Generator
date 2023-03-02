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
    <div className="App h-full bg-city bg-cover bg-center flex items-center justify-center text-center">
      <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <div className="bg-[whitesmoke] w-[82%] h-[44%] md:w-[40%] md:h-[44%] flex flex-col items-center p-[2%] rounded-[25px]">
          <h1 className="text-2xl h-[582px] flex items-center">{advice}</h1>
          <button className="relative outline-none rounded-[50px] flex items-center justify-center cursor-pointer h-[200px] w-[210px] opacity-100 bg-[#fff] border border-primary hover:animate-[rotate_0.7s_ease-in-out_both]" onClick={fetchAdvice}>
            <span className="text-[#164ca7] text-xs font-medium tracking-[0.7px] hover:animate-[storm_0.7s_ease-in-out_both] delay-[0.06s]">
              GIVE ME ADVICE!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
