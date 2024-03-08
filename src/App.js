import logo from "./logo.svg";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import background from "./assets/Image source 1.png";
import CardPage from "./components/Card-Page";
import Error404 from "./components/Error404.js";

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
