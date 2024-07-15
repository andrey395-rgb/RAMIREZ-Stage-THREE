import "./App.css";
import Card from "./sections/Card";
import Card1 from "./sections/Card1";
import { useState } from "react";
import Pokemon from "./sections/Pokemon";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="App">
      <Card1 />
      {isToggled && <Card />}
      <button className={isToggled? 'No' : 'Yes'} onClick={() => setIsToggled(!isToggled)}>{
    isToggled? 'NO DATA' : 'LOAD MORE'
    }</button>

    </div>
  );
}

export default App;
