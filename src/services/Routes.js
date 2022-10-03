import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../component/Pags/Erro/Home/Index'
import Erro from '../component/Pags/Erro/Index'


export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Erro />} />
      </Routes>
    </Router>
  );
}