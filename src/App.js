
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashbord from './components/dashbord';
import { Routes, Route,  } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
      </Routes>
    </div>
  );
}

export default App;
