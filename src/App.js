import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import background from './assets/Image source 1.png';

function App() {
  return (
    <div>
      <Router>
        <Banner image ={background}/>
        <Routes>
          <Route path="/" exact element={<Body/>}/>
          <Route path="/about" exact element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
