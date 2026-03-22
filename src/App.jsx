import { Suspense } from "react";
import "./App.css";
import Cards from "./compo/Cards/Cards";
import CatSec from "./compo/CatSec/CatSec";
import NavBar from "./compo/NavBar/NavBar";

const information = fetch("https://openapi.programming-hero.com/api/phero-tube/videos").then((res) => res.json())

function App() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar></NavBar>
      <div className="mt-8 mb-10 flex justify-center">
        <CatSec></CatSec>
      </div>
      <div className="max-w-330 mx-auto">
        <Suspense fallback={<p>Loading Videos...</p>}>
          <Cards information={information}></Cards>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
