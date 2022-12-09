import './App.css';
import Topnav from './Vendors/dashboard/Topnav';
import InventoryNav from './Vendors/Inventory/InventoryNav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import InventoryAdd from './Vendors/Inventory/InventoryAdd';
import SignIn from './Vendors/Register-Folder/SignIn';
import SignUp from './Vendors/Register-Folder/SignUp';
import Stateform from './Vendors/Register-Folder/Stateform';
import VendorSignup from './Vendors/Register-Folder/VendorSignup';
import Sidenav from './Vendors/dashboard/Sidenav';


function App() {
  return (
    <>
    <SignIn/>
    <SignUp/>
    <VendorSignup/>
    <Stateform/>
      <Router>
        {/* <Sidenav/> */}
        <Routes>
          {/* <Route path='/SignUp' element={<SignUp/>} /> */}
<<<<<<< HEAD
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
