import { FiAlertCircle } from "react-icons/fi";
import { useContext } from "react";
import SearchContext from "./context/CharacterContext";

function Alert() {
  const { alertCall, setAlertCall } = useContext(SearchContext);

  setTimeout(() => {
    setAlertCall(false);
  }, 2000);

  if (alertCall) {
    return (
      <div>
        <div className="pb-3">
          <p className="text-base">
            <FiAlertCircle className="h-6 w-6 inline " /> Please Write
            something...
          </p>
        </div>
      </div>
    );
  } else {
    <p>hola</p>;
  }
}

export default Alert;
