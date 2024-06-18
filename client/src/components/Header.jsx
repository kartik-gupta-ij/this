import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sadhana-logo.jpg';
import sadhna from '../assets/Sadhana.jpg';
import { useSelector } from 'react-redux';

function Header() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <div className="hidden md:flex justify-between mt-5 mx-8 px-3 py-2 items-center border-2 border-[#FFEDCC] rounded-2xl">
        <div className="flex items-center ">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" loading="lazy" className="mr-2" />
            <img src={sadhna} alt="sadhana" loading="lazy" />
          </Link>
        </div>

        <div>
          <nav>
            <ul className="flex space-x-6 items-center text-xl">
              <li>
                <Link to="/home" className={`${location.pathname === '/home' ? 'text-[#008080]' : ''}`}>Home</Link>
              </li>

              <li
                className='relative'
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link
                  to="/community"
                  className={`${location.pathname === '/community' ? 'text-teal-600' : ''}`}
                >
                  Community
                </Link>
                <div
                  className={`border-2 border-[#FFEDCC] absolute left-0 bg-white rounded-2xl shadow-lg ${open ? 'block' : 'hidden'}`}
                >
                  <div className="py-1">
                    <Link
                      to="/community"
                      className="block px-1 py-1 text-gray-800 hover:bg-gray-100"
                    >
                      Ask-Questions
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/chatroom"
                      className="block px-1 py-1 text-gray-800 hover:bg-gray-100"
                    >
                      ChatRoom
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/events" className={`${location.pathname === '/events' ? 'text-[#008080]' : ''}`}>Events</Link>
              </li>

              <li>
                <Link to="/assets" className={`${location.pathname === '/assets' ? 'text-[#008080]' : ''}`}>Assets</Link>
              </li>
              <li>
                <Link to="/sadhna" className={`${location.pathname === '/sadhna' ? 'text-[#008080]' : ''}`}>Sadhana</Link>
              </li>
              {!currentUser && <li className="rounded-lg px-4 py-2 bg-[#FFA500] text-white font-bold">
                <Link to="/signin">Login</Link>
              </li>}
              {currentUser && <Link to='/profile'><img src={currentUser?.profilePicture} className="rounded-full w-8 h-8  font-bold" alt="profile" /></Link>}
            </ul>
          </nav>
        </div>
      </div>

     
    </div>
  );
}

export default Header;
