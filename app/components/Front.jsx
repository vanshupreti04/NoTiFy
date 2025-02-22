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
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    toast({ title: "Date Selected", description: `You selected ${date.toDateString()}` });
  };

  return (
    <div className="min-h-screen p-8 transition-colors bg-gray-50 text-gray-900">
      <TooltipProvider>
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">{greeting()}, User!</h1>
            <p className="text-sm opacity-80">
              {mounted ? `${currentTime.toLocaleTimeString("en-Uk", { hour12: true })} - ${currentTime.toLocaleDateString()}` : ""}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Button with Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Search className="h-4 w-4 md:h-5 md:w-5" />
                  Search
                </Button>
              </TooltipTrigger>
              <TooltipContent>Find your notes and tasks</TooltipContent>
            </Tooltip>

            {/* New Page Button */}
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4 md:h-5 md:w-5" />
              New Page
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Notes Section */}
          <Card className="shadow-sm hover:shadow-md transition border-none bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <StickyNote className="h-5 w-5 text-gray-500" /> Quick Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-3">
                Jot down your ideas quickly and capture your thoughts.
              </p>
              <Textarea
                placeholder="Write something..."
                value={quickNote}
                onChange={(e) => setQuickNote(e.target.value)}
                className="mb-3"
              />
              <Button onClick={addNote} className="w-full justify-center">
                <Plus className="h-4 w-4 mr-2" /> Add Note
              </Button>
            </CardContent>
          </Card>

          {/* Tasks Section with Tabs */}
          <Card className="shadow-sm hover:shadow-md transition border-none bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-gray-500" /> Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="w-full flex justify-between bg-gray-200 p-1 rounded-md">
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <p className="text-center text-gray-400 py-4">No tasks currently.</p>
                </TabsContent>
                <TabsContent value="completed">
                  <p className="text-center text-gray-400 py-4">No completed tasks.</p>
                </TabsContent>
              </Tabs>
              <Button variant="secondary" className="mt-2 w-full justify-center">
                <ListChecks className="h-4 w-4 mr-2" /> View All Tasks
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events Section with Calendar */}
          <Card className="shadow-sm hover:shadow-md transition border-none bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" /> Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-3">
                Stay updated with your schedule and never miss an event.
              </p>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="w-full p-2 rounded-lg border"
              />
              <Button variant="secondary" className="mt-2 w-full justify-center">
                <CalendarIcon className="h-4 w-4 mr-2" /> View Monthly Calendar
              </Button>
            </CardContent>
          </Card>
        </section>
      </TooltipProvider>
    </div>
  );
}
export default Home;