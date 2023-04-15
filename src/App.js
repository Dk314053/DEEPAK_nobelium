import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Header from './Component/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
