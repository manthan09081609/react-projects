import { useState } from "react";
import ColorPicker from "react-pick-color";

function App() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <ColorPicker
        color={color}
        onChange={(color) => setColor(color.hex)}
        theme={{
          background: "lightgrey",
          inputBackground: "grey",
          borderColor: "darkgrey",
          borderRadius: "8px",
          color: "black",
          width: "320px",
        }}
      />
    </div>
  );
}

export default App;
