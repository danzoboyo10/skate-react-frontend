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
import PremadeShow from './Pages/PremadeShow/PremadeShow';


const App = () => {
  // const URL = 'https://skate-react.herokuapp.com/'
  const URL = 'http://localhost:4000/'

  const [ user, setUser ] = useState(null);
  const [ premadeBoards, setPremadeBoards ] = useState(null);

  const getPremadeBoardsData = async () => {
    const response = await fetch(URL + 'all');
    const data = await response.json();
      setPremadeBoards(data);
  };

  const createPremadeBoards = async (board) => {
    await fetch(URL + 'cart', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(board)
    });
    getPremadeBoardsData();
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => setUser(user));
    // Clear from memory
    return () => {
      unsub();
    };
  }, []);
  
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header >
          <SignUpLogin 
            user={user} 
          />
        </Header >
      </div>
      <div className="main-wrapper">
        <main> 
          <Routes> 
            <Route path="/" element={<Home user={user} URL={URL} />} exact/>
            <Route path="/boards/:id" element={
              <PremadeShow 
                createBoards={createPremadeBoards}
                getBoards={getPremadeBoardsData} 
                boards={premadeBoards} 
                URL={URL} 
              />} exact/>
            <Route path="/createboard" element={<Board URL={URL} />} />
            <Route path="/cart" element={
            <Cart 
              user={user}
            />} />
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