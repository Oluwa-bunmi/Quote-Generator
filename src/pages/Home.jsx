import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Home = () => {
  const [advice, setAdvice] = useState("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
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
    <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
      <div className="bg-[whitesmoke] w-[82%] h-[44%] md:w-[40%] md:h-[44%] flex flex-col items-center p-[2%] rounded-[25px]">
        <form
          className=" bg-[#e7e4e4] px-4 py-2 rounded-[10px]"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center gap-2">
            <FaSearch
              className="text-primary"
              onClick={() => navigate("/searched/" + input)}
            />
            <input
              type="text"
              placeholder="Search for advice"
              className="bg-transparent w-full outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
        <h1 className="text-2xl h-[582px] flex items-center">{advice}</h1>
        <button
          className="relative outline-none rounded-[50px] flex items-center justify-center cursor-pointer h-[200px] w-[210px] opacity-100 bg-[#fff] border border-primary hover:animate-[rotate_0.7s_ease-in-out_both]"
          onClick={fetchAdvice}
        >
          <span className="text-[#164ca7] text-xs font-medium tracking-[0.7px] hover:animate-[storm_0.7s_ease-in-out_both] delay-[0.06s]">
            GIVE ME ADVICE!
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
