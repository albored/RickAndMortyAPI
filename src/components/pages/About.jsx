import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

function About() {
  return (
    <div className="px-3">
      <h1 className="text-4xl mb-4">Rick and Morty API</h1>
      <p className="text-xl mb-4">
        A React app with Tailwind and DaisyUI to search Rick and Morty
        characters and info about the tv serie
      </p>

      <p className="text-lg">
        Version:<span> 1.0.0</span>
      </p>

      <p className="text-lg">
        Layout by:
        <span>
          {" "}
          Alvaro Cayo{" "}
          <Link to="https://github.com/albored" target="_blank">
            <AiFillGithub className="inline" />
          </Link>
        </span>
      </p>
    </div>
  );
}

export default About;
