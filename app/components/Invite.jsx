"use client";
import { useState } from "react";
import { Plus, Folder, Users } from "lucide-react";

export default function CollaboratorDashboard() {
  const [teamName, setTeamName] = useState("The Product Team");
  const [overview, setOverview] = useState("Overview");
  const [editingTeamName, setEditingTeamName] = useState(false);
  const [editingOverview, setEditingOverview] = useState(false);

  return (
    <div className="min-h-screen bg-[#2C1A47] text-white p-6 flex flex-col">
      {/* Big Centered Header */}
      <h1 className="text-5xl font-bold text-center mb-12">Collaboration</h1>

      <div className="flex justify-between items-start">
        {/* Left Side */}
        <div className="w-1/3 pl-10">
          {/* Editable Team Name */}
          {editingTeamName ? (
            <input
              type="text"
              className="bg-transparent text-3xl font-semibold text-white focus:outline-none mt-6 border-none"
              autoFocus
              onBlur={() => setEditingTeamName(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditingTeamName(false)}
              onChange={(e) => setTeamName(e.target.value)}
              value={teamName}
            />
          ) : (
            <h2 className="text-3xl font-semibold mt-6 cursor-pointer" onClick={() => setEditingTeamName(true)}>
              {teamName}
            </h2>
          )}

          {/* Editable Overview */}
          {editingOverview ? (
            <input
              type="text"
              className="bg-transparent text-lg text-white mt-4 focus:outline-none border-none"
              autoFocus
              onBlur={() => setEditingOverview(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditingOverview(false)}
              onChange={(e) => setOverview(e.target.value)}
              value={overview}
            />
          ) : (
            <p className="text-lg mt-4 cursor-pointer" onClick={() => setEditingOverview(true)}>
              {overview}
            </p>
          )}

          {/* Separator Line */}
          <hr className="border-gray-500 my-6" />

          {/* Profile & Name */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-full text-xl font-bold">
              JF
            </div>
            <span className="text-xl font-semibold">Jake Fischer</span>
          </div>

          {/* Add Member Button */}
          <button className="flex items-center justify-center bg-white text-black px-5 py-2 rounded-lg mt-5 hover:bg-gray-300">
            <Users size={20} className="mr-2" /> Add Member
          </button>
        </div>

        {/* Right Side - More Spacing Added */}
        <div className="w-1/3 flex flex-col space-y-4 items-end mt-2 pr-10">
          {/* New Project Button */}
          <div className="flex flex-col items-center justify-center bg-black text-white p-6 rounded-xl cursor-pointer hover:opacity-80 w-40">
            <Plus size={40} />
            <p className="mt-2">New Project</p>
          </div>

          {/* Product Project Plan */}
          <div className="flex flex-col items-center justify-center bg-white text-black p-6 rounded-xl cursor-pointer hover:opacity-80 w-40">
            <Folder size={40} />
            <p className="mt-2">Product Project Plan</p>
          </div>
        </div>
      </div>

      {/* Bottom Center Button (Shifted Down) */}
      <div className="flex justify-center mt-16">
        <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300">
          Join as Collaborator
        </button>
      </div>
    </div>
  );
}
