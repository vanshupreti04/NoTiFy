"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const processOAuthCallback = async () => {
      console.log("Processing OAuth callback at:", window.location.href);
      // Call getSessionFromUrl() before removing the hash
      const { data, error } = await supabase.auth.getSessionFromUrl();
      console.log("Returned data:", data, "Error:", error);

      if (error || !data.session) {
        console.error("Error processing OAuth callback:", error || "No session found");
        return router.replace(`/login?error=${encodeURIComponent(error?.message || "No session found")}`);
      }
      // Remove hash fragment after tokens are processed
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      console.log("Redirecting to dashboard with session:", data.session);
      router.replace("/dashboard");
    };

    processOAuthCallback();
  }, [router]);

  return <div>Loading...</div>;
}
