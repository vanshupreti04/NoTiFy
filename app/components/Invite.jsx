"use client";
import { useState } from "react";
import { Users, MoreVertical, X, Clipboard } from "lucide-react";

export default function CollaboratorDashboard() {
  const [workspaceCreated, setWorkspaceCreated] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [overview, setOverview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  const [newWorkspaceOverview, setNewWorkspaceOverview] = useState("");
  const [members, setMembers] = useState([]);
  const [editingTeamName, setEditingTeamName] = useState(false);
  const [editingOverview, setEditingOverview] = useState(false);

  // Function to generate a random 5-letter code
  const generateUniqueCode = () => {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  };

  const inviteURL = `NoTiFy/${generateUniqueCode()}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteURL);
    alert("Invite URL copied!");
  };

  return (
    <div className="min-h-screen bg-[#2C1A47] text-white p-6 flex flex-col items-center">
      {/* Large Centered Header with Tagline */}
      <h1 className="text-5xl font-bold text-center mb-4">Collaboration Hub</h1>
      <p className="text-md text-gray-300 mb-6">Work together seamlessly on projects and teams.</p>

      {/* Two Main Action Buttons */}
      <div className="flex space-x-4 mb-10">
        <button 
          onClick={() => setShowModal(true)}
          className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300"
        >
          Create Workspace
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600">
          Join Workspace
        </button>
      </div>

      <div className="flex justify-between items-start w-full max-w-5xl mt-5">
        {/* Left Side - Shown After Workspace Creation */}
        {workspaceCreated && (
          <div className="w-1/3 pl-6">
            <div className="flex items-center justify-between">
              {/* Editable Team Name */}
              {editingTeamName ? (
                <input
                  type="text"
                  className="bg-transparent text-2xl font-semibold text-white border-b border-gray-400 focus:outline-none"
                  autoFocus
                  onBlur={() => setEditingTeamName(false)}
                  onKeyDown={(e) => e.key === "Enter" && setEditingTeamName(false)}
                  onChange={(e) => setTeamName(e.target.value)}
                  value={teamName}
                />
              ) : (
                <h2 
                  className="text-2xl font-semibold cursor-pointer"
                  onClick={() => setEditingTeamName(true)}
                >
                  {teamName}
                </h2>
              )}

              {/* Three-dot Menu */}
              <MoreVertical className="cursor-pointer" />
            </div>

            {/* Editable Overview */}
            {editingOverview ? (
              <input
                type="text"
                className="bg-transparent text-sm text-white border-b border-gray-400 focus:outline-none mt-2"
                autoFocus
                onBlur={() => setEditingOverview(false)}
                onKeyDown={(e) => e.key === "Enter" && setEditingOverview(false)}
                onChange={(e) => setOverview(e.target.value)}
                value={overview}
              />
            ) : (
              <p 
                className="text-sm mt-2 cursor-pointer"
                onClick={() => setEditingOverview(true)}
              >
                {overview}
              </p>
            )}

            {/* Separator Line */}
            <hr className="border-gray-500 my-4" />

            {/* Members Section */}
            {members.length === 0 ? (
              <p className="text-gray-400">No members found</p>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full text-sm font-bold">
                  JF
                </div>
                <span className="text-md font-semibold">Jake Fischer</span>
              </div>
            )}

            {/* Add Member Button */}
            <button className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-lg mt-4 text-sm font-semibold hover:bg-gray-300">
              <Users size={16} className="mr-2" /> Add Member
            </button>
          </div>
        )}
      </div>

      {/* Create Workspace Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#2C1A47] text-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Centered Modal Title */}
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-lg font-semibold">Create Workspace</h2>
            </div>

            {/* Invite URL Section (Now Below Title) */}
            <label className="block text-white text-sm mb-2">Invite URL</label>
            <div className="flex items-center bg-black px-3 py-2 rounded-lg border border-gray-400 mb-4">
              <input
                type="text"
                value={inviteURL}
                readOnly
                className="w-full bg-transparent text-white text-sm focus:outline-none"
              />
              <Clipboard
                size={16}
                className="text-white cursor-pointer ml-2"
                onClick={copyToClipboard}
              />
            </div>

            {/* Workspace Name Input */}
            <label className="block text-white text-sm">Workspace Name</label>
            <input
              type="text"
              className="w-full p-2 bg-black text-white border border-gray-400 rounded mt-2 text-sm focus:outline-none"
              placeholder="Enter workspace name"
              value={newWorkspaceName}
              onChange={(e) => setNewWorkspaceName(e.target.value)}
            />

            {/* Overview Input */}
            <label className="block text-white text-sm mt-4">Overview</label>
            <input
              type="text"
              className="w-full p-2 bg-black text-white border border-gray-400 rounded mt-2 text-sm focus:outline-none"
              placeholder="Enter overview"
              value={newWorkspaceOverview}
              onChange={(e) => setNewWorkspaceOverview(e.target.value)}
            />

            {/* Save Button */}
            <button
              onClick={() => {
                setTeamName(newWorkspaceName);
                setOverview(newWorkspaceOverview);
                setWorkspaceCreated(true);
                setShowModal(false);
              }}
              className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 text-xs font-semibold hover:bg-purple-700"
            >
              Save
            </button>

            {/* Close Button */}
            <div className="absolute top-3 right-3 cursor-pointer">
              <X onClick={() => setShowModal(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
