import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

// components
import NavigationBar from "./components/NavigationBar";
import FooterBar from "./components/FooterBar";

// pages
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <FooterBar />
    </div>
  );
}

export default App;
