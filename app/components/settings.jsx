import React, { useState } from "react";
import { Save, User, Camera, Trash, LogOut, FileText, CheckCircle, Calendar, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Settings = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#2C1A47] min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-3 gap-10 w-full max-w-6xl -mt-32 translate-x-3">
        {/* Left Side Profile Card */}
        <div className="bg-black text-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-full h-[500px]">
          {/* Profile Image Upload */}
          <label htmlFor="profileImage" className="relative group w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center mb-6 cursor-pointer overflow-hidden">
            {selectedImage ? (
              <img src={selectedImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
            ) : (
              <User size={50} className="text-white" />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Camera size={22} className="text-white" />
              <span className="absolute text-xs text-white mt-10">Change Profile</span>
            </div>
          </label>
          <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleImageChange} />

          {/* Name Inputs */}
          <div className="flex w-full gap-3 mt-2 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-600 rounded-lg bg-gray-800 text-white text-sm focus:border-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-600 rounded-lg bg-gray-800 text-white text-sm focus:border-white focus:outline-none"
            />
          </div>

          {/* Email Change */}
          <input
            type="email"
            placeholder="Change Email"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white text-sm mb-6 focus:border-white focus:outline-none"
          />

          {/* Password Change */}
          <input
            type="password"
            placeholder="Change Password"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white text-sm mb-8 focus:border-white focus:outline-none"
          />

          {/* Save Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#4C1D95] hover:bg-[#5D2EBD] text-white rounded-lg text-sm transition duration-200"
          >
            <Save size={16} />
            Save Changes
          </motion.button>
        </div>

        {/* Right Side Cards */}
        <div className="col-span-2 flex flex-col gap-6 h-[480px]">
          {/* Activity Card */}
          <div className="bg-black text-white shadow-lg rounded-2xl p-5 h-1/2 flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">Activity</h3>

              {/* Notes Made */}
              <div className="flex items-center gap-2 mt-2 text-gray-300">
                <FileText size={20} className="text-blue-400" />
                <p className="text-sm">Notes Made: <span className="font-semibold text-white">24</span></p>
              </div>

              {/* Tasks Completed */}
              <div className="flex items-center gap-2 mt-2 text-gray-300">
                <CheckCircle size={20} className="text-green-400" />
                <p className="text-sm">Tasks Completed: <span className="font-semibold text-white">15</span></p>
              </div>

              {/* Next Event */}
              <div className="flex items-center gap-2 mt-2 text-gray-300">
                <Calendar size={20} className="text-yellow-400" />
                <p className="text-sm">Next Event: <span className="font-semibold text-white">March 5, 2025</span></p>
              </div>
            </div>

            {/* Logout & Follow Us Buttons */}
            <div className="flex flex-col gap-3">
              {/* Logout Button (Purple & White) */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-[#7E22CE] hover:bg-white text-black rounded-lg text-sm transition duration-200 cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </motion.a>

              {/* Follow Us Button (Purple & White) */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#5D2EBD] text-black rounded-lg text-sm transition duration-200 cursor-pointer"
              >
                <Globe size={16} />
                Follow Us
              </motion.a>
            </div>
          </div>

          {/* Trash Card */}
          <div className="bg-black text-white -mb-5 shadow-lg rounded-2xl p-5 h-1/2 flex flex-col justify-start items-center">
            <div className="flex items-center gap-2 mb-1">
              <Trash size={24} className="text-[#7E22CE]" />
              <h3 className="text-2xl font-bold font-sans text-[#7E22CE]">Trash</h3>
            </div>
            <p className="text-gray-400 text-xs mb-6">Restore deleted items within 24 hours</p>
            <div className="flex flex-grow justify-center items-center">
              <p className="text-white text-sm opacity-50">No items found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
