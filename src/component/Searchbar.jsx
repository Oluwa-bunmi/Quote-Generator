import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
      const [input, setInput] = useState("");
       const navigate = useNavigate();
       const handleSubmit = (e) => {
         e.preventDefault();
         navigate("/searched/" + input);
       };
  return (
    <form
      className=" bg-[#e7e4e4] px-4 py-2 w-full border-2 border-primary rounded-[10px]"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-center gap-2">
        <FaSearch
          className="text-primary cursor-pointer"
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
  );
};

export default Searchbar;
