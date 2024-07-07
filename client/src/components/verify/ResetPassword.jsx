import React from "react";

import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Herosection from "../Herosection";

export default function ResetPassword() {
  return (
    <>
      <div className="flex justify-center items-center mb-[7rem]">
        <div className="flex justify-center items-center flex-col w-[28.75rem] md:w-[47.5rem]">
          <Herosection
            heading="Reset password"
            subheading="As guardians of your spiritual journey, we invite you to forge a new password that will safeguard your sacred space within our community"
          />
          <div className="mt-5 ">
            <form>
              <div className="mt-4 sm:mt-2">
                <div className="relative mb-2 mt-2 flex items-center">
                  <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto text-gray-500" />
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                    placeholder="Password"
                  />
                </div>

                <div className="relative mb-2 mt-2 flex items-center">
                  <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto text-gray-500" />
                  <input
                    type="password"
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <br />
              <button className="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
