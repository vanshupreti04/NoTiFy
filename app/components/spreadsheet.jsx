"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const DEFAULT_ROWS = 10;
const DEFAULT_COLS = 5;
const DEFAULT_COL_WIDTH = 150;
const DEFAULT_ROW_HEIGHT = 40;

export function SpreadsheetComponent() {
  const [data, setData] = useState(
    Array.from({ length: DEFAULT_ROWS }, (_, rowIndex) =>
      Array.from({ length: DEFAULT_COLS }, (_, colIndex) =>
        rowIndex === 0 ? `Column ${colIndex + 1}` : ""
      )
    )
  );

  const [colWidths, setColWidths] = useState(Array(DEFAULT_COLS).fill(DEFAULT_COL_WIDTH));
  const [rowHeights, setRowHeights] = useState(Array(DEFAULT_ROWS).fill(DEFAULT_ROW_HEIGHT));
  const [editingCell, setEditingCell] = useState(null);
  const [resizingCol, setResizingCol] = useState(null);
  const [resizingRow, setResizingRow] = useState(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [initWidth, setInitWidth] = useState(0);
  const [initHeight, setInitHeight] = useState(0);

  // Handle editing a cell
  const handleCellClick = (row, col) => {
    setEditingCell({ row, col });
  };

  // Handle cell value change
  const handleCellChange = (e, row, col) => {
    const newData = data.map((r, i) =>
      i === row ? r.map((cell, j) => (j === col ? e.target.value : cell)) : r
    );
    setData(newData);
  };

  const handleCellBlur = () => {
    setEditingCell(null);
  };

  return (
    <div className="p-4">
      <div className="mb-2 flex gap-2">
        <Button onClick={() => setData([...data, Array(DEFAULT_COLS).fill("")])}>Add Row</Button>
        <Button
          onClick={() => setData(data.map((row) => [...row, ""]))}
        >
          Add Column
        </Button>
      </div>
      <div className="overflow-auto">
        <table className="border-collapse" style={{ width: "100%" }}>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ height: rowHeights[rowIndex] }}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      width: colWidths[colIndex],
                      border: "1px solid #ccc",
                      padding: "4px",
                      textAlign: "center",
                      position: "relative",
                    }}
                    onClick={() => handleCellClick(rowIndex, colIndex)} // Single-click to edit
                  >
                    {editingCell &&
                    editingCell.row === rowIndex &&
                    editingCell.col === colIndex ? (
                      <Input
                        autoFocus
                        value={cell}
                        onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                        onBlur={handleCellBlur}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleCellBlur();
                        }}
                      />
                    ) : (
                      cell || (rowIndex === 0 ? `Column ${colIndex + 1}` : "")
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
