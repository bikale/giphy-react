import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
import UseEffectExample from "./components/UseEffectExample";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Main />} />

          <Route path="/gif/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
