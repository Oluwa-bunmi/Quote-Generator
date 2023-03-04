import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Searchbar from "../component/Searchbar";
const Searched = () => {
  let params = useParams();
  const [searchedAdvice, setsearchedAdvice] = useState([]);
  const fetchSearch = (name) => {
    axios
      .get(`https://api.adviceslip.com/advice/search/${name}`)
      .then((res) => {
        setsearchedAdvice(res.data.slips);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSearch(params.search);
  }, [params.search]);

  return (
    <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
      <div className="bg-[whitesmoke] w-[88%] h-[66%] md:w-[60%] md:h-[58%] flex flex-col gap-4 p-[6%] md:p-[3%] rounded-[25px] overflow-y-auto">
        <Searchbar />
        {searchedAdvice.map((item) => {
          return (
            <li key={item.id} className="text-lg">
              {item.advice}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
