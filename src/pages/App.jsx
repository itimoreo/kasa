import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import "../css/App.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Body from "./Body";
import About from "./About";
import background from "../assets/Image source 1.png";
import CardPage from "./Card-Page";
import Error404 from "./Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner image={background} />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/*" element={<Navigate to="/error404" />} />
          </Routes>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
