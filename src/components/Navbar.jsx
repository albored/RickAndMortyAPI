import { GiMaterialsScience } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SearchContext from "./context/CharacterContext";

function Navbar() {
  const { setQuery } = useContext(SearchContext);

  function handleQuery() {
    setQuery(1);
  }

  return (
    <div className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container flex justify-between mx-auto">
        <div className="flex items-center">
          <GiMaterialsScience className="w-12 h-12 mr-3" />
          <Link to="/" className="text-lg ">
            <p className="hidden md:block lg:block xl:block">Rick And Morty</p>
          </Link>
        </div>
        <div className="">
          <div className="flex gap-3">
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
            <Link to="/characters">
              <button onClick={handleQuery} className="btn">
                Characters
              </button>
            </Link>
            <Link to="/about">
              <button className="btn hidden md:block lg:block xl:block">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
