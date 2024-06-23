import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import Herosection from '../components/Herosection';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <>
      <div className='flex justify-center items-center mb-3'>
        <div className='flex justify-center items-center flex-col md:w-[600px] w-[300px]'>
          <Herosection heading="Welcome back devoted soul" subheading="Return to the path of divine love. Sign in and walk hand-in-hand with lord Krishna" />
          <div className='mt-5'>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-2 mt-2 flex items-center">
                <MdOutlineMail className="absolute left-4 mb-0 mt-auto" />
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative mb-2 mt-2 flex items-center">
                <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto" />
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <br />
              <div className='text-right'>
                <Link to="/verify/verifybyemail"><span className='text-[#008080]'>Forget Password?</span></Link>
              </div>
              <br />

              <div className='hidden md:flex flex-row'>
                <div><input type="checkbox" /></div>
                <div className=''>
                  <p className='text-xl tracking-tight pl-2 text-center'>
                    I agree to the <span className='text-[#008080]'>Terms of Service</span> and <span className='text-[#008080]'>Privacy Policy</span>
                  </p>
                </div>
              </div>
              <br />
              <button
                type="submit"
                className="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl"
              >
                Log In
              </button>
              <br />
            </form>
           <OAuth/>
            <div className='mt-3 '>
              <p className=' text-xl tracking-tight pl-2 text-center'>
                Don't have an account? <Link to="/signup"><span className='text-[#008080]'>Sign Up</span></Link>
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className='w-full h-[100px] md:hidden'></div>
    </>
  );
}
