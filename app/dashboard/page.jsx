"use client";

import { useState, useEffect } from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { cn } from "../components/lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import { Sidebar } from "../components/sidebar";
import { Editor } from "../components/editor";
import { Button } from "../components/ui/button";
import { MessageSquare, Share2, LayoutDashboard, FileText, Table, Trello, Plus } from "lucide-react";
import { Dashboard } from "../components/dashboard";
import { SpreadsheetComponent } from "../components/spreadsheet";
import { KanbanBoard } from "../components/kanban-board";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { supabase } from "../../backend/supabaseClient";

const inter = Inter({ subsets: ["latin"] });
export default function Page() {
  const [activeTab, setActiveTab] = useState(null);

  // Ensure tab state is consistent between SSR & client
  useEffect(() => {
    setActiveTab("document");
  }, []);

  if (!activeTab) return null; // Prevent hydration mismatch

  const createNewPage = async () => {
    // Example stub: insert new page data into supabase
    const newPage = { title: "New Page", content: "" };
    const { error } = await supabase.from("pages").insert(newPage);
    if (error) console.error("Failed to create page:", error);
    else alert("New page created!");
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
            <h1 className="text-xl font-semibold">My Workspace</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" onClick={createNewPage}>
                <Plus className="h-4 w-4 mr-2" />
                New Page
              </Button>
            </div>
          </header>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="justify-start px-6 py-2 bg-gray-100">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-white">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="document" className="data-[state=active]:bg-white">
                <FileText className="h-4 w-4 mr-2" />
                Document
              </TabsTrigger>
              <TabsTrigger value="spreadsheet" className="data-[state=active]:bg-white">
                <Table className="h-4 w-4 mr-2" />
                Spreadsheet
              </TabsTrigger>
              <TabsTrigger value="kanban" className="data-[state=active]:bg-white">
                <Trello className="h-4 w-4 mr-2" />
                Kanban
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="flex-1 p-6 bg-gray-50">
              <Dashboard />
            </TabsContent>
            <TabsContent value="document" className="flex-1 p-6 bg-white">
              <Editor />
            </TabsContent>
            <TabsContent value="spreadsheet" className="flex-1 p-6 bg-white">
              <SpreadsheetComponent />
            </TabsContent>
            <TabsContent value="kanban" className="flex-1 p-6 bg-gray-50">
              <KanbanBoard />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </ThemeProvider>
  );
}
