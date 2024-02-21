import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Banner />
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
