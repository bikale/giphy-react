import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <SearchForm />
      <ResultsList />
    </div>
  );
};

export default Main;
