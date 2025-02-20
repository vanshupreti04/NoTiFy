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
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function EditorToolbar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg p-1 flex items-center gap-1 bg-white">
      {/* Undo / Redo */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-px h-6 bg-border mx-1" />

      {/* Heading Selector */}
      <Select
        defaultValue="normal"
        onValueChange={(value) => {
          if (value === "normal") {
            editor.chain().focus().setParagraph().run();
          } else {
            editor
              .chain()
              .focus()
              .toggleHeading({ level: parseInt(value.replace("h", "")) })
              .run();
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
          { format: "bold", icon: <Bold className="h-4 w-4" /> },
          { format: "italic", icon: <Italic className="h-4 w-4" /> },
          { format: "underline", icon: <Underline className="h-4 w-4" /> },
          { format: "strike", icon: <Strikethrough className="h-4 w-4" /> },
          { format: "blockquote", icon: <Quote className="h-4 w-4" /> },
        ].map(({ format, icon }) => (
          <Button
            key={format}
            variant="ghost"
            size="icon"
            className={`h-8 w-8 ${editor.isActive(format) ? "bg-muted" : ""}`}
            onClick={() => {
              if (format === "blockquote") {
                editor.chain().focus().toggleBlockquote().run();
              } else {
                editor.chain().focus()[`toggle${format.charAt(0).toUpperCase() + format.slice(1)}`]().run();
              }
            }}
          >
            {icon}
          </Button>
        ))}
      </div>

      <div className="w-px h-6 bg-border mx-1" />

      {/* List Buttons */}
      <div className="flex items-center gap-0.5">
        {[
          { list: "bulletList", icon: <List className="h-4 w-4" /> },
          { list: "orderedList", icon: <ListOrdered className="h-4 w-4" /> },
          { list: "taskList", icon: <CheckSquare className="h-4 w-4" /> },
        ].map(({ list, icon }) => (
          <Button
            key={list}
            variant="ghost"
            size="icon"
            className={`h-8 w-8 ${editor.isActive(list) ? "bg-muted" : ""}`}
            onClick={() => editor.chain().focus()[`toggle${list.charAt(0).toUpperCase() + list.slice(1)}`]().run()}
          >
            {icon}
          </Button>
        ))}
      </div>

      <div className="w-px h-6 bg-border mx-1" />

      {/* Extra Actions */}
      <div className="flex items-center gap-0.5">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            const url = window.prompt("Enter the URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
        >
          <Highlighter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().insertContent("😊").run()}
        >
          <Smile className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
        >
          <Superscript className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
        >
          <Subscript className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
