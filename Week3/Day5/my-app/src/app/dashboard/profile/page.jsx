"use client";

import Image from "next/image";
import Button from "../../../../components/ui/Button";
import { FaStar, FaHeart, FaBolt } from "react-icons/fa";


export default function AboutPage() {
  return (
    <div className="p-6 flex flex-col gap-6 max-w-4xl mx-auto relative min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 overflow-hidden">

      <FaStar className="text-yellow-400 text-6xl absolute top-10 left-10 animate-bounce opacity-30" />
      <FaHeart className="text-red-400 text-6xl absolute bottom-20 right-20 animate-bounce opacity-30" />
      <FaBolt className="text-blue-500 text-6xl absolute top-1/2 left-1/3 animate-bounce opacity-30" />
      <FaStar className="text-yellow-400 text-6xl absolute bottom-10 left-10 animate-bounce opacity-30" />


      {/* TOP SECTION */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">

        {/* LEFT — PROFILE IMAGE */}
        <div className="flex justify-center md:block">
          <Image
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxjb2Rpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-lg object-cover"
          />
        </div>

        {/* RIGHT — NAME + ROLE + EMAIL */}
        <div className="flex-1 ">
          <p className="text-gray-600 mt-1">Name</p>
          <h2 className="font-semibold text-black-700">Manya Sharma</h2>
          <p className="text-gray-600 mt-1">Job Title</p>
          <p className="font-semibold text-black-700">Trainee Software Engineer</p>
          <p className="text-gray-600 mt-1">Email</p>
          <p className="font-semibold text-black-700">manya@example.com</p>
        </div>

        {/* SOCIALS — RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-semibold text-gray-700">LinkedIn</h4>
            <p className="text-gray-600 text-sm">linkedin.com/manya123</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Twitter</h4>
            <p className="text-gray-600 text-sm">@manya_tweets</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Facebook</h4>
            <p className="text-gray-600 text-sm">facebook.com/manya</p>
          </div>
        </div>
      </div>

      {/* BIO SECTION */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Bio</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          laboriosam, illum ducimus excepturi cumque consequatur repudiandae
          officiis maiores cupiditate doloribus.
        </p>

        <Button text="Edit Profile" className="mt-4" />
      </div>
    </div>
  );
}
