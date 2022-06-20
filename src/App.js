import './App.scss';
import {Routes, Route, Link} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Board from './Pages/Board/Board';
import SignUpLogin from './Components/SignUpLogin';
import Cart from './Pages/Cart/Cart';
// Firebase imports
import { auth } from './services/firebase';
import { useState, useEffect } from 'react';


const App = () => {
  const URL = 'https://skate-react.herokuapp.com/'

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => setUser(user));
    // Clear from memory
    return () => {
      unsub();
    }
  }, [])
  
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header user={user} >
          <SignUpLogin />
        </Header >
      </div>
      <div className="main-wrapper">
        <main> 
          <Routes> 
            <Route path="/" element={<Home URL={URL} />} exact/>
            <Route path="/skateboards" element={<Board URL={URL} />} />
            <Route path="/cart" element={<Cart URL={URL} />} />
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