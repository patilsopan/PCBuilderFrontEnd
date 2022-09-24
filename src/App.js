import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Memory from "./Category/Memory";
import MotherBoard from "./Category/MotherBoard";
import PowerSupply from "./Category/PowerSupply";
import GraphicCard from "./Category/GraphicCard";
import HardDrive from "./Category/HardDrives";
import ComputerCase from "./Category/ComputerCases";
import Laptop from "./Category/Laptops";
import Demo from "./Category/Demo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Category/memory" element={<Memory />}></Route>
          <Route path="/Category/motherboard" element={<MotherBoard />}></Route>
          <Route path="/Category/powersupply" element={<PowerSupply />}></Route>
          <Route path="/Category/graphiccard" element={<GraphicCard />}></Route>
          <Route path="/Category/harddrive" element={<HardDrive />}></Route>
          <Route path="/Category/laptop" element={<Laptop />}></Route>
          <Route path="/Category/demo" element={<Demo />}></Route>

          <Route
            path="/Category/computercase"
            element={<ComputerCase />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
