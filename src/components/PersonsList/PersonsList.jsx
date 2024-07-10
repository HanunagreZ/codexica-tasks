import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useFetch from '../hooks/useFetch';
import sortingDataAsc from '../../utils/SortingDataAsc';
import sortingDataDesc from '../../utils/SortingDataDesc';
import Button from '../Button/Button';
import './style.css';

const BASE_URL = 'https://swapi.dev/api/people/';

const PersonsList = () => {
  const [inputText, setInputText] = useState('');
  const debouncedSearch = useDebounce(inputText);

  const { data, isLoading, error, setData } = useFetch(
    `${BASE_URL}?search=${debouncedSearch}`
  );

  function handleChange(e) {
    setInputText(e.target.value);
  }

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
        <Button onClick={() => sortingDataDesc(data, setData)}>
          Sort Desc
        </Button>
        <Button onClick={() => sortingDataAsc(data, setData)}>Sort Asc</Button>
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

export default PersonsList;
