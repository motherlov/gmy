import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Router,Route,Routes} from 'react-router-dom'
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Dashboard from './Component/Dashboard/Dashboard';
import BlogDetails from './Component/Dashboard/BlogDetails'
import Banner from './Component/Dashboard/Banner';
import Booking from './Component/Dashboard/Booking';
import Profile_Other from './Component/Profile_Other/Profile_Other';
import Signin from './Component/Profile_Other/Signin';
import Login2 from './Component/Helper/Login2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path= '/login' element={<Login/>} />
        <Route path= '/login2' element={<Login2/>} />
        <Route path= '/register' element={<Register/>} />
        <Route path= '/blog' element={<Dashboard/>} />
        <Route path= '/getblogdetails/:id' element={<BlogDetails/>} />
        <Route path= '/banner' element={<Banner/>} />
        <Route path= '/booking' element={<Booking/>} />


        {/* <Route path= '/signin' element={<Signin/>} />

        <Route path= '/user' element={<Profile_Other/>} /> */}


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
