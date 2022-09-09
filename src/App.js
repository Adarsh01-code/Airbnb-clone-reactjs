
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import SearchPage from './SearchPage';
import Showmap from './Showmap';

function App() {
  return (
    
    <Router>
    <div className="app">

       <Routes>
           <Route path='/' element = {<Header />} />
       </Routes>

       <Routes>
            <Route path='/search' element = {<Header />} />
       </Routes>
       

       <Routes>
          <Route path="/search" element={<SearchPage />} /> 
       
          <Route path="/" element ={<Home />} />
             
      </Routes>

      <Routes>
             <Route path='/' element ={<Showmap />} />
       </Routes>


       <Routes>
             <Route path='/' element ={<Footer />} />
       </Routes>

       <Routes>
           <Route path='/search' element ={<Footer />} />
       </Routes>

       

    
      </div>
    </Router>
      
    
  );
}

export default App;
