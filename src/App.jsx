import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './componenets/NavBar/NavBar';
import './App.css';

function App() {
  return (
  <>
    <NavBar />
    <Routes>
      <Route path='/Home' element={<Home />} />
    </Routes>
    <Home/>
  </>
  );
}

export default App;