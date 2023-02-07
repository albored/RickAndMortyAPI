import { useContext } from "react";
import SearchContext from "../context/CharacterContext";
import Alert from "../Alert";

function CharactersSearch() {
  const { text, setText, setData, handleClear, data, setAlertCall, alertCall } =
    useContext(SearchContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      setAlertCall(true);
      setText("");
    } else {
      setData(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 ">
      <div>
        {alertCall && <Alert />}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                onChange={handleChange}
                value={text}
                placeholder="Search Characters..."
                type="text"
                className="input mb-12 bg-gray-200 w-full text-black"
              />
              <button
                className="btn absolute top-0 right-0 w-36 rounded-l-none"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {data.length > 0 && (
          <button onClick={handleClear} className="btn btn-ghost ">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default CharactersSearch;
