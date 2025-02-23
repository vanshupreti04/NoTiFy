"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const Profile = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setUser(session.user);
    });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>First Name: {user.user_metadata.firstName || ""}</p>
      <p>Last Name: {user.user_metadata.lastName || ""}</p>
      {/* Logout and additional UI */}
    </div>
  );
};

export default Profile;