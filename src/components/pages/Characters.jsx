import CharacterList from "../characters/CharacterList";
import Pagination from "../Pagination";
// import Spinner from "../../components/Spinner";

function Characters() {
  return (
    <div>
      <Pagination />
      {/* <Spinner /> */}
      <CharacterList />
      <Pagination />
    </div>
  );
}

export default Characters;
