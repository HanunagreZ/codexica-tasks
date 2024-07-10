import React, { useEffect, useState } from "react";
import sortingDataAsc from "../../utils/SortingDataAsc";
import sortingDataDesc from "../../utils/SortingDataDesc";
import "./style.css";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";

const BASE_URL = "https://swapi.dev/api/people/";

const PersonsList3 = () => {
  //const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const debouncedSearch = useDebounce(inputText);

  const { data, isLoading, error, setData } = useFetch(
    `https://swapi.dev/api/people/?search=${debouncedSearch}`
  );

  function handleChange(e) {
    setInputText(e.target.value);
  }

  // useEffect(() => {
  //   // const startLoad = async () => {
  //   //   await getPeople(debouncedSearch);
  //   // };
  //   // startLoad();
  //   //console.log(data + "useEffect x");
  // }, [debouncedSearch, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      {data && (
        <ul>
          {data.results.map((item) => (
            <li key={item.url}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PersonsList3;
