import { BrowserRouter , Routes , Route} from 'react-router-dom';
import React from 'react';

// import BG from './components/css/background.js';

import BG from './components/css/lineBG';

import Quiz from './components/Quiz';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BG/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
