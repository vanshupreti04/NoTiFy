import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../components/ui/button";

export function SortableItem({ id, children, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-2 border rounded mb-1 bg-white flex justify-between items-center">
      <div>{children}</div>
      {onDelete && (
        <Button onClick={() => onDelete(id)} variant="ghost" size="sm">
          Delete
        </Button>
      )}
    </div>
  );
}
