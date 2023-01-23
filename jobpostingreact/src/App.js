import logo from './logo.svg';
import './App.css';
import {
 
  Routes,
  Route,

} from "react-router-dom";
import Login from './Component/Login'
import Header from './Component/Header'
function App() {
  return (
    <Routes>
    <Route element={<Header />} path="/temp" />
    <Route element={<Login />} path="/" />
    </Routes>
  );
}

export default App;
