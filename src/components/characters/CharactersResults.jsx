import { useEffect, useState, useContext } from "react";
import SearchContext from "../context/CharacterContext";
import CharacterItem from "./characterItem";
import Spinner from "../Spinner";

function CharactersResults() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data, setData, setAlertCall } = useContext(SearchContext);

  useEffect(() => {
    fetchCharacters();
    setCharacters([]);
  }, [data]);

  const fetchCharacters = async () => {
    try {
      if (data.length > 0) {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_URL}?&name=${data}`
        );

        if (response.ok === false) {
          setLoading(false);
          setData([]);
          setAlertCall(true)
          return;
        }

        const { results } = await response.json();
        const queryChar = results.filter((el) =>
          el.name.toLowerCase().trim().includes(`${data}`)
        );

        setCharacters(queryChar);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {characters.map((char) => (
          <CharacterItem key={char.id} char={char} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default CharactersResults;
