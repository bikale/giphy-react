import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import UseEffectExample from "./components/UseEffectExample";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      {toggle && <UseEffectExample />}
      <Header />
      <Main />
      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
    </div>
  );
}

export default App;
