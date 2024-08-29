import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer' ;
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import UserAccountPage from './pages/UserAccountPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AddEvent from './pages/AddEvent';
import EventPage from './pages/EventPage';

import Admin from './pages/Admin' ;
import { Upcoming } from './pages/Upcoming';
import About from './pages/About';


axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Header/>
      <Routes>
          <Route index element={<IndexPage />} />
          <Route path='/useraccount' element={<UserAccountPage />} />
          <Route path='/createEvent' element={<AddEvent />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/event/:id' element={<EventPage />} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </UserContextProvider>
  );
}

export default App;
