import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
