import logo from './logo.svg';

import './App.css';
import Home from './Phoenix/Home';
import Map from './Phoenix/Map';
import Vision from './Phoenix/Vision';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artificial from './DivisionTab/Artificial';
import Objectdetection from './DivisionTab/Objectdetection';
import Webdevelopement from './DivisionTab/Webdevelopement';
import Crypto from './DivisionTab/Crypto';
import Allbitcoin from './DivisionTab/Allbitcoin';



function App() {
  return (
    <BrowserRouter>
        <Routes>
     <Route path='/' element= {<Home/>}/>
      <Route path='/map' element= {<Map/>}/>
     <Route path='/vision' element={<Vision/>}/>
     <Route path='/artificialintellicenter' element={<Artificial/>}/>
     <Route path='/webdevelopementcenter' element={<Webdevelopement/>}/>
     <Route path='/cryptointellicenter' element={<Crypto/>}/>
     <Route path='/artificialintellicenter/page2' element={<Objectdetection/>}/>
     <Route path='/cryptointellicenter/all-coins' element={<Allbitcoin/>}/>
     </Routes>
      </BrowserRouter>
    
  );
}

export default App;
