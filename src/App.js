import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Cuisine from './Pages/Cuisine';
import Recipe from './Pages/Recipe';


function App() {
  return (
    <>
    <BrowserRouter>
     <Header/> 
     <Routes>

       <Route path="/" element={<Home/> }/>
       <Route path="/:name" element={<Cuisine/> }/>
       <Route path="/recipe/:name" element={<Recipe/> }/>
       
     </Routes>
    
     
     </BrowserRouter>    
    </>
  );
}

export default App;
