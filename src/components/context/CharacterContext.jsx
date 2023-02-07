import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [alertCall, setAlertCall] = useState(false);

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
        setText,
        setData,
        handleClear,
        setAlertCall,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
