import DataPage from "./pages/datapage/DataPage";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Search from "./pages/Search";
import Graph from "./pages/Graph";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PieCharts from "./PieCharts";
import GoogleSignUp from "./GoogleSignUp";
import Dashboard from "./Dashboard";
import HomePageOne from "./pages/homepage/HomePageOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageOne />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/data' element={<DataPage />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/graph' element={<Graph />}></Route>
          <Route path='/pie-chart' element={<PieCharts />}></Route>
          <Route path='/google-signup' element={<GoogleSignUp />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
