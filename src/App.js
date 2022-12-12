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
import Bankform from './Vendors/Register-Folder/Bankform';
import Lastform from './Vendors/Register-Folder/Lastform';

function App() {
  return (
    <>
      <Router>
        {/* <Sidenav/> */}
        {/* <Bankform/> */}
        {/* <Stateform/> */}
        {/* <SignUp/> */}
        {/* <VendorSignup/> */}
        {/* <Lastform/> */}
        <Routes>
        <Route path='/' element={<SignUp/>} />
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/VendorSignup' element={<VendorSignup/>}/>
          <Route path='/Stateform' element={<Stateform/>}/>
          <Route path='/Bankform' element={<Bankform/>}/>
          <Route path='/Lastform' element={<Lastform/>}/>
          {/* <Route path='/' element={<Topnav/>} /> */}
          {/* <Route path="/InventoryNav" element={<InventoryNav/>}/> */}
          {/* <Route path='/InventoryAdd' element={<InventoryAdd/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
