import logo from './logo.svg';
import './App.css';
import {Route,Routes,Link} from "react-router-dom";
import GetAll from './GetAll';
import Create from './Create';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<GetAll></GetAll>}/>
        <Route path='/GetAll' element={<GetAll></GetAll>}/>
        <Route path='/Create' element={<Create></Create>}/>
      </Routes>
      <Link to='/Create'>Create</Link><br/>
      <Link to='/GetAll'>People List</Link><br/>
    </div>
  );
}

export default App;
