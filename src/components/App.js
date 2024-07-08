
import Topbar from './Topbar/Topbar'
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {


  return (

    <>
      <Topbar></Topbar>
      <div className='main'><Outlet /> </div>
    </>

  );
}


export default App;