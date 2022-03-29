import './App.css';
import { Routes, Route } from 'react-router';

import Header from './components/tsx/Header';
import Help from './pages/tsx/help';
import Encode from './pages/tsx/encode';
// import decode from './pages/tsx/decode';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Encode/>}/>
          <Route path="/help" element={<Help/>}/>
      </Routes>
    </div>
  );
}

export default App
