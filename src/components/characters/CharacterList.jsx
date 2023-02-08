import { useEffect, useContext } from "react";
import SearchContext from "../context/CharacterContext";
import CharacterItem from "./CharacterItem";
import Spinner from "../../components/Spinner";

function CharacterList() {
  const { query, charList, setCharList, loading, setLoading } =
    useContext(SearchContext);

  useEffect(() => {
    allCharacters();
  }, [query]);

  async function allCharacters() {
    setLoading(true);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${query}`
    );

    const data = await response.json();
    setCharList(data);
    setLoading(false);
  }
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {charList.results?.map((char) => (
            <CharacterItem key={char.id} char={char} />
          ))}
        </div>
      )}
      {/* <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {charList.results?.map((char) => (
          <CharacterItem key={char.id} char={char} />
        ))}
      </div> */}
    </div>
  );
}
export default CharacterList;
