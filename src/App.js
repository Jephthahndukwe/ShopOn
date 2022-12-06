import './App.css';
import Topnav from './Vendors/dashboard/Topnav';
import InventoryNav from './Vendors/Inventory/InventoryNav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      {/* <Topnav/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Topnav/>} />
          <Route path="/InventoryNav" element={<InventoryNav/>}/>
        </Routes>
      </Router>
      {/* <InventoryNav/> */}
    </>
  );
}

export default App;
