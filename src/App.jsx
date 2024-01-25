
// import './App.css'
// import Component from './Component'

import { useState } from "react"

function App() {
  const [Color, setColor]= useState("violet");

  return (
    <>
   
   <div className="w-full h-screen duration-300" style={{background: Color }} >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 " >
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl " >
     
      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "red"}} onClick={()=> setColor("red")} >Red</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "#ff9933"}} onClick={()=> setColor("#ff9933")}>Safroon</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "green"}} onClick={()=> setColor("green")}>Green</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "Black"}} onClick={()=> setColor("black")}>Black</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-black " style={{background: "white"}} onClick={()=> setColor("white")}>white</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-black " style={{background: "yellow"}} onClick={()=> setColor("yellow")} >Yellow</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "blue"}} onClick={()=> setColor("blue")} >Blue</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "olive"}} onClick={()=> setColor("olive")} >Olive</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-white " style={{background: "purple"}} onClick={()=> setColor("purple")} >Purple</button>

      <button className="outline-none px-4 py-1 rounded-full shadow-sm text-black " style={{background: "pink"}} onClick={()=> setColor("pink")} >Pink</button>
     </div>
    </div>
   </div>
    
     </>
  )
}

export default App
