"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { supabase } from "../../backend/supabaseClient";
import {
  Search, Settings, Plus, Trash2, ChevronDown, ChevronRight, Star,
  MoreHorizontal, File, LayoutDashboard, Table2, Trello
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "../components/ui/dropdown-menu";
import { cn } from "../components/lib/utils";

// Save pages to Supabase
const savePagesToBackend = async (pagesData) => {
  const { error } = await supabase.from("pages").upsert({ id: "default", data: pagesData });
  if (error) console.error("Supabase error:", error);
};

export function Sidebar() {
  const [pages, setPages] = useState([
    { id: "1", title: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, isFavorite: true, href: "/" },
    { 
      id: "2", title: "Documents", icon: <File className="h-4 w-4" />, isExpanded: true, 
      children: [
        { id: "2.1", title: "Project A", icon: <File className="h-4 w-4" />, href: "/" },
        { id: "2.2", title: "Project B", icon: <File className="h-4 w-4" />, href: "/" },
      ]
    },
    { id: "3", title: "Spreadsheets", icon: <Table2 className="h-4 w-4" />, href: "/" },
    { id: "4", title: "Kanban Boards", icon: <Trello className="h-4 w-4" />, href: "/" },
  ]);

  const [renamePageId, setRenamePageId] = useState(null);
  const [renameValue, setRenameValue] = useState("");
  const lastTapRef = useRef(0);

  const updatePages = (newPages) => {
    setPages(newPages);
    savePagesToBackend(newPages);
  };

  const toggleExpand = (pageId) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId ? { ...page, isExpanded: !page.isExpanded } : page
      )
    );
  };

  const toggleFavorite = (pageId) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId ? { ...page, isFavorite: !page.isFavorite } : page
      )
    );
  };

  const addNewPage = () => {
    updatePages([...pages, { id: Date.now().toString(), title: "Untitled", icon: <File className="h-4 w-4" />, href: "/" }]);
  };

  const addNewFolder = () => {
    updatePages([...pages, { id: Date.now().toString(), title: "New Folder", icon: <span className="text-xl">📂</span>, isExpanded: true, children: [] }]);
  };

  const deletePage = (pageId) => {
    const filterPages = (pagesArr) =>
      pagesArr
        .filter((p) => p.id !== pageId)
        .map((p) => (p.children ? { ...p, children: filterPages(p.children) } : p));
    updatePages(filterPages(pages));
  };

  const startRename = (pageId) => {
    const page = findPageById(pageId, pages);
    if (!page) return;
    setRenamePageId(pageId);
    setRenameValue(page.title);
  };

  const confirmRename = () => {
    if (!renamePageId) return;
    updatePages(renamePages(pages, renamePageId, renameValue));
    setRenamePageId(null);
    setRenameValue("");
  };

  const renamePages = (pagesArr, pageId, newTitle) =>
    pagesArr.map((p) => {
      if (p.id === pageId) return { ...p, title: newTitle };
      if (p.children) return { ...p, children: renamePages(p.children, pageId, newTitle) };
      return p;
    });

  const findPageById = (id, pagesArr) => {
    for (const p of pagesArr) {
      if (p.id === id) return p;
      if (p.children) {
        const child = findPageById(id, p.children);
        if (child) return child;
      }
    }
    return null;
  };

  const renderPage = (page) => {
    const isRenaming = renamePageId === page.id;

    return (
      <div key={page.id}>
        <div className="group flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-md cursor-pointer">
          {page.children && (
            <Button variant="ghost" size="icon" className="h-4 w-4" onClick={() => toggleExpand(page.id)}>
              {page.isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          )}

          {page.icon}

          {!isRenaming ? (
            <Link href={page.href || "#"} className="flex-1" onClick={() => {
              const now = Date.now();
              if (now - lastTapRef.current < 300) startRename(page.id);
              lastTapRef.current = now;
            }}>
              {page.title}
            </Link>
          ) : (
            <Input value={renameValue} autoFocus onChange={(e) => setRenameValue(e.target.value)} onBlur={confirmRename}
              onKeyDown={(e) => { if (e.key === "Enter") confirmRename(); }} className="flex-1 text-sm ml-1" />
          )}

          <Button variant="ghost" size="icon" onClick={() => toggleFavorite(page.id)}>
            <Star className={cn("h-4 w-4", { "fill-yellow-400 text-yellow-400": page.isFavorite })} />
          </Button>
        </div>

        {page.children && page.isExpanded && <div className="mt-1">{page.children.map(renderPage)}</div>}
      </div>
    );
  };

  return (
    <div className="w-64 bg-[#79349f] text-white flex flex-col h-screen">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3 mb-4">
          <Avatar><AvatarImage src="/placeholder.svg" /><AvatarFallback>AE</AvatarFallback></Avatar>
          <p className="font-medium">Antonio Erdeljac</p>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4" />
          <Input placeholder="Search" className="pl-8 bg-white/10 border-white/10 text-white" />
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        <Button variant="ghost" className="w-full justify-start" onClick={addNewPage}><Plus className="mr-2 h-4 w-4" />New Page</Button>
        <Button variant="ghost" className="w-full justify-start" onClick={addNewFolder}><span className="mr-2 text-xl">📂</span>New Folder</Button>

        <div className="space-y-1">{pages.map(renderPage)}</div>
      </div>
    </div>
  );
}
