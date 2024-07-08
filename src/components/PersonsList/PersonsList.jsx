import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import sortingDataAsc from "../../utils/SortingDataAsc";
import sortingDataDesc from "../../utils/SortingDataDesc";
import "./style.css";
import useDebounce from "../hooks/useDebounce";

const PersonsList = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const debouncedSearch = useDebounce(inputText, 0);

  async function handleChange(e) {
    setInputText(e.target.value);

    const response = await axios.get(
      `https://swapi.dev/api/people/?search=${e.target.value}`
    );

    sortingDataAsc(response.data.results, setData);
  }

  useEffect(() => {
    console.log("useEffect");
    console.log(debouncedSearch + "deb");
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <div className="persons">
      <h1>Star Wars person list:</h1>
      <div className="control-panel">
        <input
          placeholder="Search..."
          value={inputText}
          onChange={handleChange}
        />
        <button className="btn" onClick={() => sortingDataAsc(data, setData)}>
          Sort Asc
        </button>
        <button className="btn" onClick={() => sortingDataDesc(data, setData)}>
          Sort Desc
        </button>
      </div>
      <p>You search for: {inputText}</p>
      <hr />

      {data.map((item) => (
        <div key={item.url}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default PersonsList;
