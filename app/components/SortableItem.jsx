import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../components/ui/button";
import { GripVertical } from "lucide-react";

export function SortableItem({ id, children, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  // Memoize styles to prevent unnecessary recalculations
  const style = React.useMemo(
    () => ({
      transform: CSS.Transform.toString(transform),
      transition,
    }),
    [transform, transition]
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-2 border rounded mb-1 bg-white flex items-center justify-between shadow-sm"
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-2"
        aria-label="Drag to reorder"
      >
        <GripVertical className="h-4 w-4 text-gray-400" />
      </div>

      <div className="flex-1">{children}</div>

      {onDelete && (
        <Button
          onClick={() => onDelete(id)}
          variant="ghost"
          size="sm"
          className="text-red-500 hover:bg-red-100"
        >
          Delete
        </Button>
      )}
    </div>
  );
}
