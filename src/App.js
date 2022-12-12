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
import InventoryDetails from './Vendors/Inventory/InventoryDetails';
import Landingpage from './Vendors/dashboard/Landingpage';


function App() {
  return (
    <>
    {/* <SignIn/> */}
    {/* <SignUp/> */}
    {/* <VendorSignup/> */}
    {/* <Stateform/> */}
      <Router>
        <Sidenav/>
        <Routes>
          {/* <Route path='/' element={<SignUp/>} /> */}
          <Route path='/VendorSignup' element={<VendorSignup/>}/>
          <Route path='/Stateform' element={<Stateform/>}/>
          <Route path='/' element={<Topnav/>}/>
          {/* <Route path='/SignUp' element={<SignUp/>} /> */}
          {/* <Route path='/' element={<Topnav/>} /> */}
          {/* <Route path="/InventoryNav" element={<InventoryNav/>}/> */}
          {/* <Route path='/InventoryAdd' element={<InventoryAdd/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
