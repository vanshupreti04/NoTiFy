"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Search, Plus, Calendar as CalendarIcon, ListChecks, StickyNote, Moon, Sun } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Calendar } from "./ui/calendar";

export function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quickNote, setQuickNote] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Track if we are in the editing mode for a new note
  
  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const addNote = () => {
    if (quickNote.trim()) {
      toast({ title: "Note added!", description: "Your note has been saved." });
      setQuickNote("");
      setIsEditing(false); // Stop editing after note is saved
    }
  };

  const cancelEdit = () => {
    setQuickNote("");
    setIsEditing(false); // Stop editing if cancelled
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    toast({ title: "Date Selected", description: `You selected ${date.toDateString()}` });
  };

  return (
    <div className="min-h-screen p-8 transition-colors bg-white text-[#2C1A47]">
      <TooltipProvider>
        <header className="flex items-start mb-4">
          <div>
            <h1 className="text-2xl mb-2 md:text-4xl font-bold text-[#2C1A47]">
              {greeting()}, User!
            </h1>
            <p className="text-sm opacity-80 ml-1">
              {mounted ? `${currentTime.toLocaleTimeString("en-Uk", { hour12: true })} - ${currentTime.toLocaleDateString()}` : ""}
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Notes Section */}
          <Card className="shadow-sm hover:shadow-md transition border-none bg-[#2C1A47] text-white max-h-[400px] overflow-auto">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="text-lg font-semibold flex items-center justify-center gap-2">
                <StickyNote className="h-5 w-5 text-gray-500" /> Quick Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {/* Add top margin to tagline */}
              <p className="text-gray-300 text-sm mb-6">
                Make your notes quickly and efficiently. Don't waste time!
              </p>

              {/* Conditional rendering based on whether the user is editing a note */}
              {!isEditing ? (
                <>
                  <Button onClick={() => setIsEditing(true)} className="w-full mt-52 justify-center">
                    <Plus className="h-4 w-4 mr-2" /> New Note
                  </Button>
                </>
              ) : (
                <div>
                  <Textarea
                    placeholder="Write something..."
                    value={quickNote}
                    onChange={(e) => setQuickNote(e.target.value)}
                    className="mb-3"
                  />
                  <div className="flex justify-between gap-2">
                    {/* Small buttons with colors for Save and Cancel */}
                    <Button 
                      onClick={cancelEdit} 
                      className="w-1/2 justify-center text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={addNote} 
                      className="w-1/2 justify-center bg-purple-600 text-white hover:bg-purple-700"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tasks Section with Tabs */}
          <Card className="shadow-sm hover:shadow-md transition border-none bg-[#2C1A47] text-white max-h-[400px] overflow-auto">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="text-lg font-semibold flex items-center justify-center gap-2">
                <ListChecks className="h-5 w-5 text-gray-500" /> Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center mb-7">
              <Tabs defaultValue="all">
                <TabsList className="w-full mb-14 flex justify-between bg-[#2C1A47] p-1 rounded-md">
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <p className="text-center text-gray-400 py-6">No tasks currently.</p>
                </TabsContent>
                <TabsContent value="completed">
                  <p className="text-center text-gray-400 py-4">No completed tasks.</p>
                </TabsContent>
              </Tabs>
              <Button variant="secondary" className="mt-20 w-full justify-center">
                <ListChecks className="h-4 w-4 mr-2" /> Manage All Tasks
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events Section with Calendar */}
          <Card className="shadow-sm hover:shadow-md transition border-none bg-[#2C1A47] text-white max-h-[400px] overflow-auto">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="text-lg font-semibold flex items-center justify-center gap-2">
                <CalendarIcon className="h-5 w-5 text-purple-300" /> Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-4">
              <p className="text-gray-300 text-sm mb-7">
                Stay updated with your schedule and never miss an event.
              </p>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="w-full p-2 rounded-lg border max-h-[250px]"
              />
            </CardContent>
          </Card>
        </section>
      </TooltipProvider>
    </div>
  );
}

export default Home;
