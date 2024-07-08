import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import sortingDataAsc from "../../utils/SortingDataAsc";
import sortingDataDesc from "../../utils/SortingDataDesc";
import "./style.css";
import useDebounce from "../hooks/useDebounce";

const PersonsList2 = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const debouncedSearch = useDebounce(inputText);

  async function getPeople(query) {
    const response = await axios.get(
      `https://swapi.dev/api/people/?search=${query}`
    );
    if (inputText !== "") {
      sortingDataAsc(response.data.results, setData);
      return;
    }
    setData(response.data.results);
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const startLoad = async () => {
      await getPeople(debouncedSearch);
    };
    startLoad();
  }, [debouncedSearch]);

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

export default PersonsList2;
