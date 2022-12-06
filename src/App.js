import './App.css';
import Topnav from './Vendors/dashboard/Topnav';
import InventoryNav from './Vendors/Inventory/InventoryNav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import InventoryAdd from './Vendors/Inventory/InventoryAdd';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Topnav/>} />
          <Route path="/InventoryNav" element={<InventoryNav/>}/>
          <Route path='/InventoryAdd' element={<InventoryAdd/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
