import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Cuisine from './Pages/Cuisine';


function App() {
  return (
    <>
    <BrowserRouter>
     <Header/> 
     <Routes>

       <Route path="/" element={<Home/> }/>
       <Route path="/:name" element={<Cuisine/> }/>
       
     </Routes>
    
     
     </BrowserRouter>    
    </>
  );
}

export default App;
