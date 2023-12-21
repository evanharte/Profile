import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Work from "./components/Work";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/Work" element={<Work />} />
        <Route exact path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
