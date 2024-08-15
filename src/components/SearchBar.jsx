import { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    navigate(`/weather/${city}`);
    setCity("");
  };
  return (
    <>
      <form
        className="search-form"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Search for a city"
          className="search-input"
          onChange={(event) => {
            setCity(event.target.value);
          }}
          value={city}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
