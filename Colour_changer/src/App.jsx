import { useState } from "react";
import "./App.css";


function App() {
  const [colour, setcolour] = useState("olive");

  return (
   <div className="w-full h-screen duration-400"
   style={{backgroundColor: colour}}
   >

    <div className="fixed bottom-10 left-150 flex flex-wrap justify-center align-middle gap-2 bg-amber-50 px-3 py-1 rounded-md">
        <div className="flex flex-wrap justify-center gap-2 rounded-md text-white">
          <button className="rounded-md py-1 px-1 " style={{backgroundColor: "blue"}} onClick={() =>setcolour("blue")}>blue</button>
          <button className="rounded-md py-1 px-1 " style={{backgroundColor: "green"}} onClick={() =>setcolour("green")}>Green</button>
          <button className="rounded-md py-1 px-1 " style={{backgroundColor: "black"}} onClick={() =>setcolour("black")}>Black</button>
          <button className="rounded-md py-1 px-1 " style={{backgroundColor: "gray"}} onClick={() =>setcolour("gray")}>gray</button>
          <button className="rounded-md py-1 px-1 " style={{backgroundColor: "red"}} onClick={() =>setcolour("red")}>red</button>
        </div>
    
    </div>

   </div>
  );
}

export default App;
