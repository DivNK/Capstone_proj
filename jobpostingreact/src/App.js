import logo from './logo.svg';
import './App.css';
import {
 
  Routes,
  Route,

} from "react-router-dom";
import Login from './Component/Login'
import Header from './Component/Header'
import Alljobs from './Component/Alljobs'
import Card from './Component/Card';

function App() {
  return (<>
    <Header />
    <Routes>
    
    <Route element={<Login />} path="/" />
    <Route element={<Alljobs />} path="/alljobs" />
    <Route element={<Card />} path="/card" />
    
    </Routes></>
  );
}

export default App;
