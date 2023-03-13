import { FormEvent, useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form className="SearchForm block" onSubmit={handleSubmit}>
      <label htmlFor="search-term">Search for a GIF</label>
      <div className="inputs">
        <input
          type="text"
          id="search-term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
