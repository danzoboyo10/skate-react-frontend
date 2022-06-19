import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Board from './pages/Board'


const App = () => {
  const URL = 'https://skate-react.herokuapp.com/'
  
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="main-wrapper">
        <main> 
          <Routes> 
            <Route path="/" element={<Home URL={URL} />} exact/>
            <Route path="/skateboards" element={<Board URL={URL} />} />
            <Route path="/skateboards/:id" element={<Board URL={URL} />} />
          </Routes>
        </main>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default App;