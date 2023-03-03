import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Searched = () => {
  let params = useParams();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  const fetchSearch = (name) => {
    axios
      .get(`https://api.adviceslip.com/advice/search/${name}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSearch(params.search);
  }, [params.search]);

  return (
    <div className="text-[red]">
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
    </div>
  );
};

export default Searched;
