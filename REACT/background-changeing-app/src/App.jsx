import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: bgColor, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
      }}>
      <h1>Background Color Changer</h1>
      <div>
        <button
          onClick={() => setBgColor("red")} style={{ background: "red",color: "black",padding:"20px", margin:"10px", fontWeight:"bolder", fontSize:"20px"}}>Red
        </button>

        <button
          onClick={() => setBgColor("blue")}style={{ background: "blue" ,color: "black",padding:"20px", margin:"10px",fontWeight:"bolder", fontSize:"20px"}}>Blue
        </button>

        <button
          onClick={() => setBgColor("green")} style={{ background: "green",color: "black",padding:"20px", margin:"10px" ,fontWeight:"bolder", fontSize:"20px"}}>Green
        </button>

        <button
          onClick={() => setBgColor("yellow")} style={{ background: "yellow",color: "black",padding:"20px", margin:"10px",fontWeight:"bolder", fontSize:"20px" }}>Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
