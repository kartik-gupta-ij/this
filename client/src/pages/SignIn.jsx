import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import Herosection from "../components/Herosection";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        toast.error(data.message)
        dispatch(signInFailure(data));
        return;
      }
      console.log(data.message)
      toast.success(data.message)
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex justify-center items-center mb-2">
        <div className="flex justify-center items-center flex-col  md:w-[37.5rem]">
          <Herosection
            heading="Welcome back devoted soul"
            subheading="Return to the path of divine love. Sign in and walk hand-in-hand with lord Krishna"
          />
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-2 mt-2 flex items-center">
                <MdOutlineMail className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative mb-2 mt-2 flex items-center">
                <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="text-right mt-2">
                <Link to="/verify/verifybyemail">
                  <span className="text-teal-600">Forgot Password?</span>
                </Link>
              </div>

              <div className="hidden md:flex flex-row mt-4">
                <input type="checkbox" className="mr-2" />
                <p className="text-base tracking-tight text-center">
                  I agree to the{" "}
                  <span className="text-teal-600">Terms of Service</span> and{" "}
                  <span className="text-teal-600">Privacy Policy</span>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 transition duration-300 bg-teal-600 text-base mt-4"
              >
                Log In
              </button>
            </form>
            <OAuth />
            <div className="mt-4 text-center">
              <p className="text-base tracking-tight">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-teal-600">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2.25rem] md:hidden"></div>
    </>
  );
}
