import { useContext } from "react";
import SearchContext from "./context/CharacterContext";

function Pagination() {
  const { setQuery, query } = useContext(SearchContext);

  const handlePageNext = () => {
    if (query >= 42) return;
    setQuery(query + 1);
  };

  const handlePageBack = () => {
    if (query <= 1) return;
    setQuery(query - 1);
  };

  return (
    <div className="flex justify-center my-5">
      <div className="btn-group">
        <button onClick={handlePageBack} className="btn">
          «
        </button>
        <button className="btn">Page {query}</button>
        <button onClick={handlePageNext} className="btn">
          »
        </button>
      </div>
    </div>
  );
}

export default Pagination;
