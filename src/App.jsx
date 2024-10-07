import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewPerson from "./components/addNewPerson/AddNewPerson";
import RI from "./components/Retrieve Information/RI";
import Navbar from "./components/Navbar/Navbar";
import RoutesBtn from "./components/routesBtn/RoutesBtn";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RoutesBtn />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retrieve-info" element={<RI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
