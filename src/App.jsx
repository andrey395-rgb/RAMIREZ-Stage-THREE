import "./App.css";
import Card from "./sections/Card";
import Card1 from "./sections/Card1";
import { useState } from "react";
import Card2 from "./sections/Card2";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="App">
      <Card1 />
    </div>
  );
}

export default App;
