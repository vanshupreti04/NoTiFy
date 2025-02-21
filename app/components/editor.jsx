"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { EditorToolbar } from "./editor-toolbar";
import { useEffect, useCallback } from "react";
import { supabase } from "../../backend/supabaseClient";
import { debounce } from "lodash";

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base max-w-full focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      debouncedSave(editor.getHTML());
    },
  });

  // Function to fetch and set content from Supabase
  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("documents")
      .select("content")
      .eq("id", "default")
      .single();

    if (error) {
      console.error("Error fetching document:", error);
    } else if (data?.content && editor) {
      editor.commands.setContent(data.content);
    }
  };

  // Function to save content (debounced to avoid frequent API calls)
  const saveContentToBackend = async (content) => {
    if (!content) return;

    const { error } = await supabase
      .from("documents")
      .upsert({ id: "default", content });

    if (error) {
      console.error("Failed to save document:", error);
    }
  };

  // Debounced function for saving
  const debouncedSave = useCallback(debounce(saveContentToBackend, 1000), []);

  useEffect(() => {
    if (editor) {
      fetchContent();
      window.editor = editor; // Make editor globally accessible
    }
  }, [editor]);

  return (
    <div className="flex flex-col gap-4">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} className="min-h-[200px] border p-4 rounded-lg" />
    </div>
  );
}
