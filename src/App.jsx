import { useState } from "react"
import Demo from "./demo"

//Project Developed by : Yogesh Rana (Full Stack Developer)
function App() {
  let [color, setColor] = useState("skyblue")
  return (

    <>

      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
          <Demo/>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl font-serif"
              style={{ backgroundColor: "red" }}>Red</button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl font-serif"
              style={{ backgroundColor: "green" }}>Green</button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl font-serif"
              style={{ backgroundColor: "blue" }}>Blue</button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl font-serif"
              style={{ backgroundColor: "yellow" }}>Yellow</button>

            <button
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl font-serif"
              style={{ backgroundColor: "pink" }}>Pink</button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl font-serif"
              style={{ backgroundColor: "lavender" }}>Lavender</button>

            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl font-serif"
              style={{ backgroundColor: "white" }}>White</button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl font-serif"
              style={{ backgroundColor: "black" }}>Black</button>
          </div>
        </div>
      </div>

      

    </>
  )
}

export default App
