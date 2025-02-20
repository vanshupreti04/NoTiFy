"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Search, Plus, Calendar, ListChecks, StickyNote } from "lucide-react";

export function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{greeting()}, User!</h1>
          <p className="text-gray-500 text-sm">{currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4 md:h-5 md:w-5" />
            Search
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4 md:h-5 md:w-5" />
            New Page
          </Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-sm hover:shadow-md transition border-none bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <StickyNote className="h-5 w-5 text-gray-500" />Quick Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-3">Jot down your ideas quickly and capture your thoughts.</p>
            <div className="text-center text-gray-400 py-4">No quick notes yet.</div>
            <Button className="mt-2 w-full justify-center">
              <Plus className="h-4 w-4 mr-2" /> Add Note
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition border-none bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-gray-500" />Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-3">Manage your tasks and track your to-dos efficiently.</p>
            <div className="text-center text-gray-400 py-4">No tasks currently.</div>
            <Button variant="secondary" className="mt-2 w-full justify-center">
              <ListChecks className="h-4 w-4 mr-2" /> View All Tasks
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition border-none bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-500" />Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-3">Stay updated with your schedule and never miss an event.</p>
            <div className="text-center text-gray-400 py-4">No upcoming events.</div>
            <Button variant="secondary" className="mt-2 w-full justify-center">
              <Calendar className="h-4 w-4 mr-2" /> View Monthly Calendar
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
