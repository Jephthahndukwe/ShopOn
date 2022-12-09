import './App.css';
import Topnav from './Vendors/dashboard/Topnav';
import InventoryNav from './Vendors/Inventory/InventoryNav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import InventoryAdd from './Vendors/Inventory/InventoryAdd';
import SignUp from './Vendors/Register-Folder/SignIn';
import SignIn from './Vendors/Register-Folder/SignUp';
import Sidenav from './Vendors/dashboard/Sidenav';

function App() {
  return (
    <>
    {/* <SignUp/> */}
      <Router>
        <Sidenav/>
        <Routes>
<<<<<<< HEAD
          {/* <Route path='/SignUp' element={<SignUp/>} /> */}
=======
          <Route path='/SignUp' element={<SignUp/>} />
>>>>>>> origin/master
          <Route path='/' element={<Topnav/>} />
          <Route path="/InventoryNav" element={<InventoryNav/>}/>
          <Route path='/InventoryAdd' element={<InventoryAdd/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
