import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [alertCall, setAlertCall] = useState(false);
  const [charList, setCharList] = useState({});
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState(1);

  const handleClear = (e) => {
    e.preventDefault();
    setData([]);
  };

  return (
    <SearchContext.Provider
      value={{
        text,
        data,
        alertCall,
        charList,
        query,
        loading,
        setText,
        setData,
        handleClear,
        setAlertCall,
        setQuery,
        setCharList,
        setLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
