import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Skateboards from './pages/Skateboards';

const App = () => {
  const URL = 'https://skate-react.herokuapp.com/'

  return (
    <div className="App">
      <Header />
      <main> 
      <Routes> 
        <Route path="/" element={<Home />} exact/>
        <Route path="/skateboards" element={<Skateboards URL={URL} />} />
        <Route path="/skateboards/:id" element={<Skateboards URL={URL} />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;