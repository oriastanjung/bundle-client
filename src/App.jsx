import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import RulesAgreement from "./pages/RulesAgreement";
import DomainInfo from "./pages/DomainInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/rules_agreement" element={<RulesAgreement />}></Route>
        <Route path="/domain_info" element={<DomainInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
