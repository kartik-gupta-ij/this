import React, { useState } from 'react';
import { FaRegUser, FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail, MdOutlineRealEstateAgent } from "react-icons/md";
import { GiNurseMale } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Herosection from '../components/Herosection';
import OAuth from '../components/OAuth';

function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col w-[600px]'>
        <Herosection
          heading="Begin your journey"
          subheading="Open your heart to the divine presence. Sign up today and experience the transformative power of bhakti yoga."
        />
        <div className='mt-5'>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-2 mt-2 flex items-center">
              <FaRegUser className="absolute left-4 mb-0 mt-auto" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name of devotee"
              />
            </div>
            <div className="relative mb-2 mt-2 flex items-center">
              <MdOutlineMail className="absolute left-4 mb-0 mt-auto" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="relative mb-2 mt-2 flex items-center">
              <FaMobileAlt className="absolute left-4 mb-0 mt-auto" />
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mobile Number"
              />
            </div>
            <div className="relative mb-2 mt-2 flex items-center">
              <ImProfile className="absolute left-4 mb-0 mt-auto" />
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Country name"
              />
            </div>
            <div className="relative mb-2 mt-2 flex items-center">
              <MdOutlineRealEstateAgent className="absolute left-4 mb-0 mt-auto" />
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
                placeholder="Age"
              />
              <GiNurseMale className="absolute right-40 mb-0 mt-auto" />
              <select
                id="gender"
                name="gender"
                value={formData.gender || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="relative mb-2 mt-2 flex items-center">
              <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="relative mb-2 mt-2 flex items-center">
              <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Confirm password"
              />
            </div>
            <br />
            <div className='flex flex-row'>
              <div><input type="checkbox" id="terms" name="terms" onChange={handleChange} /></div>
              <div>
                <p className='text-xl tracking-tight pl-2 text-center'>
                  I agree to the <span className='text-[#008080]'>Terms of Service</span> and <span className='text-[#008080]'>Privacy Policy</span>
                </p>
              </div>
            </div>
            <br /><br />
            <button className="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" type="submit">
              Create your account
            </button>
          </form>
          <OAuth />
          <div className='mt-3'>
            <p className='text-xl tracking-tight pl-2 text-center'>
              Already have an account? <Link to="/login"><span className='text-[#008080]'>Sign In</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;


// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';

// export default function SignUp() {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setError(false);
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       setLoading(false);
//       if (data.success === false) {
//         setError(true);
//         return;
//       }
//       navigate('/sign-in');
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   };
//   return (
//     <div className='p-3 max-w-lg mx-auto'>
//       <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
//       <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//         <input
//           type='text'
//           placeholder='Username'
//           id='username'
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange}
//         />
//         <input
//           type='email'
//           placeholder='Email'
//           id='email'
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           id='password'
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange}
//         />
//         <button
//           disabled={loading}
//           className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
//         >
//           {loading ? 'Loading...' : 'Sign Up'}
//         </button>
//         <OAuth />
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Have an account?</p>
//         <Link to='/sign-in'>
//           <span className='text-blue-500'>Sign in</span>
//         </Link>
//       </div>
//       <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
//     </div>
//   );
// }
