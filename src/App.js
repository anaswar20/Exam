import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Viewstudents from './Components/Viewlibrary';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Viewstudents/>}/>
        <Route path='/add' element={<Add data={{id:'',name:'',grade:''}}method="post"/>}/>
      
        
      </Routes>

      
    </div>
  );
}

export default App;
