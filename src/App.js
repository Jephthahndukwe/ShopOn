// import './App.css';
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
import ShopElectronics from './Users/LandingPage/ShopElectronics';


function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<ShopElectronics/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
