import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">Home </Link>
      </header>
      <Routes>
        <Route exact path="/home" element={<Home />} />
       
      </Routes>
      
    </div>
    
  );
}

export default App;
