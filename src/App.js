import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Erorr from './pages/Error';

function App() {
  return (
    <div>
       <h1>Rect route dom</h1>
  
          <BrowserRouter>
              <nav>
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/about'>About</Link></button>
                <button><Link to='/profile'>Profile</Link></button>
              </nav>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About />}/>
                <Route path='/Profile' element={<Profile />} />
                <Route path='*' element={<Erorr/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
