"use client";

import { FaUser, FaLock } from "react-icons/fa";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import {FaCode, FaServer, FaCloud, FaLaptopCode, FaMicrochip } from "react-icons/fa";


export default function LoginPage() {
  return (
    <div className="flex items-center relative min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 overflow-hidden justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form className="flex flex-col gap-4">

       {/*Bouncing Background Icons */}
      <FaCode className="text-blue-700 text-6xl absolute top-16 left-10 animate-bounce opacity-20" />
      <FaServer className="text-green-700 text-6xl absolute bottom-20 right-14 animate-bounce opacity-20" />
      <FaCloud className="text-white text-6xl absolute top-1/3 right-1/4 animate-bounce opacity-20" />
      <FaLaptopCode className="text-yellow-700 text-6xl absolute bottom-10 left-1/3 animate-bounce opacity-20" />
      <FaMicrochip className="text-pink-700 text-6xl absolute top-1/2 left-1/2 animate-bounce opacity-20" />

          

          {/* Username Field */}
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
            <FaUser className="text-gray-500 mr-3" size={18} />
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
            <FaLock className="text-gray-500 mr-3" size={18} />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Checkbox + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Button text="Login" className="w-30 mt-2" />
        </form>
      </div>
    </div>
  );
}
