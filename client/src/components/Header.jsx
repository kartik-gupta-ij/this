import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sadhana-logo.jpg';
import sadhna from '../assets/Sadhana.jpg';
import { useSelector } from 'react-redux';

function Header() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser)



  return (
    <div className=''>
    <div className="flex justify-between mt-5 mx-8 px-3 py-2 items-center border-2 border-[#FFEDCC] rounded-2xl">
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

            <li>
              <Link to="/community" className={`${location.pathname === '/community' ? 'text-[#008080]' : ''}`}>Community</Link>
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
            {/* <div>{currentUser?.profilePicture} </div> */}
            {currentUser && <Link to='/profile' ><img src={currentUser?.profilePicture} className="rounded-full w-8 h-8  font-bold" alt="profile" /></Link>}



          </ul>
        </nav>
      </div>
    </div>
    </div>
  );
}

export default Header;



// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <div className='bg-slate-200'>
//       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 className='font-bold'>Auth App</h1>
//         </Link>
//         <ul className='flex gap-4'>
//           <Link to='/'>
//             <li>Home</li>
//           </Link>
//           <Link to='/about'>
//             <li>About</li>
//           </Link>
//           <Link to='/profile'>
//             {currentUser ? (
//               <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
//             ) : (
//               <li>Sign In</li>
//             )}
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }
