import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div class="App-header">
      <header className="bg-white shadow px-6">
        <div
          className="
          flex
          justify-between
          items-center
          h-16
          border-b
        "
        >
          <button
            className="
          transition
          duration-200
          hover:scale-110
          focus:outline-none
         
         

          

          
          "
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <button>Click me</button>
          <button>Click me</button>
        </div>
      </header>
    </div>
  );
}

export default App;
