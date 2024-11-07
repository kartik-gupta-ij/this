import React, { useState } from "react";
import { FaRegUser, FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail, MdOutlineRealEstateAgent } from "react-icons/md";
import { GiNurseMale } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Herosection from "../components/Herosection";
import OAuth from "../components/OAuth";

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
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col w-[18.75rem] md:w-[37.5rem]">
          <Herosection
            heading="Begin your journey"
            subheading="Open your heart to the divine presence. Sign up today and experience the transformative power of bhakti yoga."
          />
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4 mt-2 flex items-center">
                <FaRegUser className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Name of devotee"
                />
              </div>
              <div className="relative mb-4 mt-2 flex items-center">
                <MdOutlineMail className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Email"
                />
              </div>
              <div className="relative mb-4 mt-2 flex items-center">
                <FaMobileAlt className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="relative mb-4 mt-2 flex items-center">
                <ImProfile className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Your Country name"
                />
              </div>
              <div className="relative mb-4 mt-2 flex items-center">
                <div className="relative w-1/2">
                  <MdOutlineRealEstateAgent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="date"
                    id="age"
                    name="age"
                    value={formData.age || ""}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                    placeholder="Age"
                  />
                </div>
                <div className="relative w-1/2 ml-4">
                  <GiNurseMale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="relative mb-4 mt-2 flex items-center">
                <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Password"
                />
              </div>
              <div className="relative mb-4 mt-2 flex items-center">
                <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto text-gray-500" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                  placeholder="Confirm password"
                />
              </div>
              <div className="flex flex-row items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onChange={handleChange}
                  className="mr-2"
                />
                <p className="text-base tracking-tight text-center">
                  I agree to the{" "}
                  <span className="text-blue-500">Terms of Service</span> and{" "}
                  <span className="text-blue-500">Privacy Policy</span>
                </p>
              </div>
              <button
                className="w-full py-3 rounded-md shadow-lg font-medium text-white bg-[#008080] transition duration-300 text-lg"
                type="submit"
              >
                Create your account
              </button>
            </form>

            <OAuth />
            <div className="mt-3">
              <p className="text-xl tracking-tight pl-2 text-center">
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="text-[#008080]">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] md:hidden"></div>
    </>
  );
}

export default Signup;

