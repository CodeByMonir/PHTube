import "./App.css";
import Cards from "./compo/Cards/Cards";
import CatSec from "./compo/CatSec/CatSec";
import NavBar from "./compo/NavBar/NavBar";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar></NavBar>
      <div className="mt-8 mb-10 flex justify-center">
        <CatSec></CatSec>
      </div>
      <div className="max-w-330 mx-auto">
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
