import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer'
import LoginHome from './pages/LoginHome';
import Community from './pages/Community';
import './App.css';
import Events from './pages/Events';
import Sadhna from './pages/Sadhna';
import Assets from './pages/Assets';
import ResetPassword from './components/verify/ResetPassword';
import VerifyByEmail from './components/verify/VerifyByEmail';
import SadhanaForm from './pages/SadhanaForm';
import Chatroom from './pages/Chatroom';
import Privateprofile from './pages/privateuser/Logged.jsx'
import Test from './pages/Test.jsx';
import LeaderBoard from './pages/LeaderBoard.jsx';
export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/chatroom' element={<Chatroom />} />
        <Route path='/testpaper' element={<Test />} />
        <Route path='/' element={<Home />} />
        <Route path='/profiledata' element={<Privateprofile />} />
        <Route path='/community' element={<Community />} />
        <Route path='/verify/resetpassword' element={<ResetPassword />} />
        <Route path='/verify/verifybyemail' element={<VerifyByEmail />} />
        <Route path='/sadhana/form' element={<SadhanaForm />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/sadhna' element={<Sadhna />} />
        <Route path='/events' element={<Events />} />
        <Route path='/home' element={<LoginHome />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
