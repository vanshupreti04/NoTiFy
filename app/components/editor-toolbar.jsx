"use client";

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  CheckSquare,
  Link,
  Quote,
  Highlighter,
  Minus,
  Smile,
  Superscript,
  Subscript,
  Undo,
  Redo,
  Eraser,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../components/ui/tooltip";

export function EditorToolbar({ editor }) {
  if (!editor) return null;

  return (
    <TooltipProvider>
      <div className="border rounded-lg p-1 flex items-center gap-1 bg-white dark:bg-gray-800">
        {/* Undo / Redo */}
        <div className="flex items-center gap-0.5">
          {[
            { action: "undo", icon: <Undo className="h-4 w-4" />, disabled: !editor.can().undo() },
            { action: "redo", icon: <Redo className="h-4 w-4" />, disabled: !editor.can().redo() },
          ].map(({ action, icon, disabled }) => (
            <Tooltip key={action}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => editor.chain().focus()[action]().run()}
                  disabled={disabled}
                >
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{action.charAt(0).toUpperCase() + action.slice(1)}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="w-px h-6 bg-border mx-1" />

        {/* Heading Selector */}
        <Select
          defaultValue="normal"
          onValueChange={(value) => {
            if (value === "normal") {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: parseInt(value.replace("h", "")) }).run();
            }
          }}
        >
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="h1">Heading 1</SelectItem>
            <SelectItem value="h2">Heading 2</SelectItem>
            <SelectItem value="h3">Heading 3</SelectItem>
          </SelectContent>
        </Select>

        <div className="w-px h-6 bg-border mx-1" />

        {/* Formatting Buttons */}
        <div className="flex items-center gap-0.5">
          {[
            { format: "bold", icon: <Bold className="h-4 w-4" />, label: "Bold" },
            { format: "italic", icon: <Italic className="h-4 w-4" />, label: "Italic" },
            { format: "underline", icon: <Underline className="h-4 w-4" />, label: "Underline" },
            { format: "strike", icon: <Strikethrough className="h-4 w-4" />, label: "Strikethrough" },
            { format: "blockquote", icon: <Quote className="h-4 w-4" />, label: "Blockquote" },
          ].map(({ format, icon, label }) => (
            <Tooltip key={format}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 ${editor.isActive(format) ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                  onClick={() => editor.chain().focus()[`toggle${format.charAt(0).toUpperCase() + format.slice(1)}`]().run()}
                >
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="w-px h-6 bg-border mx-1" />

        {/* List Buttons */}
        <div className="flex items-center gap-0.5">
          {[
            { list: "bulletList", icon: <List className="h-4 w-4" />, label: "Bullet List" },
            { list: "orderedList", icon: <ListOrdered className="h-4 w-4" />, label: "Ordered List" },
            { list: "taskList", icon: <CheckSquare className="h-4 w-4" />, label: "Task List" },
          ].map(({ list, icon, label }) => (
            <Tooltip key={list}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 ${editor.isActive(list) ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                  onClick={() => editor.chain().focus()[`toggle${list.charAt(0).toUpperCase() + list.slice(1)}`]().run()}
                >
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="w-px h-6 bg-border mx-1" />

        {/* Extra Actions */}
        <div className="flex items-center gap-0.5">
          {[
            { action: "link", icon: <Link className="h-4 w-4" />, label: "Insert Link", handler: () => {
                const url = window.prompt("Enter the URL");
                if (url) editor.chain().focus().setLink({ href: url }).run();
              }
            },
            { action: "highlight", icon: <Highlighter className="h-4 w-4" />, label: "Highlight", handler: () => editor.chain().focus().toggleHighlight().run() },
            { action: "hr", icon: <Minus className="h-4 w-4" />, label: "Insert Divider", handler: () => editor.chain().focus().setHorizontalRule().run() },
            { action: "emoji", icon: <Smile className="h-4 w-4" />, label: "Insert Emoji", handler: () => editor.chain().focus().insertContent("😊").run() },
            { action: "superscript", icon: <Superscript className="h-4 w-4" />, label: "Superscript", handler: () => editor.chain().focus().toggleSuperscript().run() },
            { action: "subscript", icon: <Subscript className="h-4 w-4" />, label: "Subscript", handler: () => editor.chain().focus().toggleSubscript().run() },
            { action: "clear", icon: <Eraser className="h-4 w-4" />, label: "Clear Formatting", handler: () => editor.chain().focus().clearNodes().unsetAllMarks().run() },
          ].map(({ action, icon, label, handler }) => (
            <Tooltip key={action}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handler}>
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
