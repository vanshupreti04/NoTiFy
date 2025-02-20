"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { EditorToolbar } from "./editor-toolbar";
import { useEffect } from "react";
import { supabase } from "../../backend/supabaseClient";

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base max-w-full focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      saveContentToBackend(html);
    },
  });

  const saveContentToBackend = async (content) => {
    if (!content) {
      console.log("Empty content. Skipping save.");
      return;
    }
    const { error } = await supabase
      .from("documents")
      .upsert({ id: "default", content });
    if (error) {
      console.error("Failed to save document:", JSON.stringify(error, null, 2));
    }
  };

  useEffect(() => {
    if (editor) {
      window.editor = editor; // Make editor globally available
    }
  }, [editor]);

  return (
    <div className="flex flex-col gap-4">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} className="min-h-[200px]" />
    </div>
  );
}
