"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { useEffect } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  CheckSquare,
  Link as LinkIcon,
  Quote,
  Highlighter,
  Minus,
  Smile,
  Undo,
  Redo,
  Eraser,
  Save,
} from "lucide-react"; 
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";


export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ blockquote: true }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        validate: (href) => /^https?:\/\//.test(href),
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: "opacity-100", // Force full opacity
        },
      }),
      TaskList,
      TaskItem.configure({ nested: true }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "max-w-full focus:outline-none text-base [&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl [&_h1]:my-4 [&_h2]:my-3 [&_h3]:my-2",
      },
    },
  });

  useEffect(() => {
    if (editor) {
      window.editor = editor;
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <TooltipProvider>
      <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
        {/* Toolbar */}
        <div className="border min-h-[20px] border-white/20 rounded-lg p-2 flex items-center gap-2 bg-black">
          {/* Undo / Redo */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
              >
                <Undo className="h-5 w-5 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Undo</TooltipContent>
          </Tooltip>

          <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 hover:bg-white hover:text-black transition"
                  onClick={() => editor.chain().focus().redo().run()} 
                  disabled={!editor.can().redo()}
                >
                  <Redo className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8} className="bg-white text-black px-3 py-1 rounded-md shadow-md">
                Redo
              </TooltipContent>
            </Tooltip>

          <div className="w-px h-6 bg-border mx-2" />

          {/* Heading Selector */}
          <Select
            defaultValue="normal"
            onValueChange={(value) => {
              editor.chain().focus();
              if (value === "normal") {
                editor.chain().setParagraph().run();
              } else {
                const level = Number(value.replace("h", ""));
                editor.chain().toggleHeading({ level }).run();
              }
            }}
          >
            <SelectTrigger className="w-[140px] h-10">
              <SelectValue placeholder="Normal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="h1">Heading 1</SelectItem>
              <SelectItem value="h2">Heading 2</SelectItem>
              <SelectItem value="h3">Heading 3</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-px h-6 bg-border mx-2" />

          {/* Formatting Buttons */}
          {[
            { format: "bold", icon: <Bold className="h-5 w-5" /> },
            { format: "italic", icon: <Italic className="h-5 w-5" /> },
            { format: "underline", icon: <UnderlineIcon className="h-5 w-5" /> },
            { format: "strike", icon: <Strikethrough className="h-5 w-5" /> },
            { format: "blockquote", icon: <Quote className="h-5 w-5" /> },
          ].map(({ format, icon }) => (
            <Tooltip key={format}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 ${editor.isActive(format) ? "bg-gray-200" : ""}`}
                  onClick={() =>
                    editor.chain().focus()[`toggle${format.charAt(0).toUpperCase() + format.slice(1)}`]().run()
                  }
                >
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{format.charAt(0).toUpperCase() + format.slice(1)}</TooltipContent>
            </Tooltip>
          ))}

          <div className="w-px h-6 bg-border mx-2" />

          {/* Lists */}
          {[
            { list: "bulletList", command: "toggleBulletList", icon: <List className="h-5 w-5" /> },
            { list: "orderedList", command: "toggleOrderedList", icon: <ListOrdered className="h-5 w-5" /> },
            { list: "taskList", command: "toggleTaskList", icon: <CheckSquare className="h-5 w-5" /> },
          ].map(({ list, command, icon }) => (
            <Tooltip key={list}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 ${editor.isActive(list) ? "bg-gray-200" : ""}`}
                  onClick={() => editor.chain().focus()[command]().run()}
                >
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{list.replace("List", " List")}</TooltipContent>
            </Tooltip>
          ))}

          <div className="w-px h-6 bg-border mx-2" />

          {/* Additional Actions */}
          {[
            {
              action: () => {
                const url = prompt("Enter URL");
                if (url === null) return;
                if (url === "") {
                  editor.chain().focus().unsetLink().run();
                } else {
                  editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
                }
              },
              icon: <LinkIcon className="h-5 w-5" />,
              label: "Attach Link", // ✅ Changed Tooltip
            },
            {
              action: () => editor.chain().focus().toggleHighlight().run(),
              icon: <Highlighter className="h-5 w-5" />,
              label: "Highlighter", // ✅ Changed Tooltip
            },
            {
              action: () => editor.chain().focus().setHorizontalRule().run(),
              icon: <Minus className="h-5 w-5" />,
              label: "Line", // ✅ Changed Tooltip
            },
            {
              action: () => editor.chain().focus().insertContent("😊").run(),
              icon: <Smile className="h-5 w-5" />,
              label: "Emoji", // ✅ Changed Tooltip
            },
            {
              action: () => editor.chain().focus().clearContent(true).run(),
              icon: <Eraser className="h-5 w-5" />,
              label: "Eraser", // ✅ Changed Tooltip
            },
            {
              action: () => {
                alert("Your text is saved!"); // Popup confirmation
                editor.chain().focus().clearContent(true).run(); // Clear editor
              },
              icon: <Save className="h-5 w-5" />, // Lucide Save icon
              label: "Save",
            },
          ].map(({ action, icon, label }, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10" onClick={action}>
                  {icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Editor Content */}
        <EditorContent 
          editor={editor} 
          className="min-h-[400px] p-4 rounded-lg w-full bg-black text-white border border-white/20 focus:outline-none"
        />
      </div>
    </TooltipProvider>
  );
}

export default Editor;
