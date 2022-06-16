import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Skateboards from './pages/Skateboards';



function App() {
  return (
    <div className="App">
      <Header />
      <main> 
      <Routes> 
        <Route path="/" element={<Home />} exact/>
        <Route path="/skateboards" element={<Skateboards />} />
        <Route path="/skateboards/:id" element={<Skateboards />} />


      </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;
