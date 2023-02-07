import { GiMaterialsScience } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container flex justify-between mx-auto">
        <div className="flex items-center">
          <GiMaterialsScience className="w-12 h-12 mr-3" />
          <Link to="/" className="text-lg ">
            <p className="">Rick And Morty</p>
          </Link>
        </div>
        <div className="">
          <div className="flex gap-3">
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
            <Link to="/about">
              <button className="btn">About</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
