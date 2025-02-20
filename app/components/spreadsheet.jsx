"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// Defaults for grid dimensions and sizes
const DEFAULT_ROWS = 10;
const DEFAULT_COLS = 5;
const DEFAULT_COL_WIDTH = 150; // in pixels
const DEFAULT_ROW_HEIGHT = 40; // in pixels

export function SpreadsheetComponent() {
  // Create an empty grid (2D array) with all cells empty
  const [data, setData] = useState(
    Array.from({ length: DEFAULT_ROWS }, () => Array.from({ length: DEFAULT_COLS }, () => ""))
  );
  // Column widths and row heights arrays
  const [colWidths, setColWidths] = useState(
    Array.from({ length: DEFAULT_COLS }, () => DEFAULT_COL_WIDTH)
  );
  const [rowHeights, setRowHeights] = useState(
    Array.from({ length: DEFAULT_ROWS }, () => DEFAULT_ROW_HEIGHT)
  );
  // Track which cell is in editing mode: { row, col }
  const [editingCell, setEditingCell] = useState(null);

  // Resizing state variables for columns and rows
  const [resizingCol, setResizingCol] = useState(null);
  const [resizingRow, setResizingRow] = useState(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [initWidth, setInitWidth] = useState(0);
  const [initHeight, setInitHeight] = useState(0);

  // --- Cell editing handlers ---
  const handleCellDoubleClick = (row, col) => {
    setEditingCell({ row, col });
  };
  const handleCellChange = (e, row, col) => {
    const newData = data.map((r, i) =>
      i === row ? r.map((cell, j) => (j === col ? e.target.value : cell)) : r
    );
    setData(newData);
  };
  const handleCellBlur = () => {
    setEditingCell(null);
  };

  // --- Resizing handlers ---
  const handleColResizerMouseDown = (colIndex, e) => {
    setResizingCol(colIndex);
    setStartX(e.clientX);
    setInitWidth(colWidths[colIndex]);
    e.stopPropagation();
  };
  const handleMouseMove = (e) => {
    if (resizingCol !== null) {
      const deltaX = e.clientX - startX;
      const newWidth = Math.max(50, initWidth + deltaX);
      const newWidths = [...colWidths];
      newWidths[resizingCol] = newWidth;
      setColWidths(newWidths);
    }
    if (resizingRow !== null) {
      const deltaY = e.clientY - startY;
      const newHeight = Math.max(20, initHeight + deltaY);
      const newHeights = [...rowHeights];
      newHeights[resizingRow] = newHeight;
      setRowHeights(newHeights);
    }
  };
  const handleMouseUp = () => {
    setResizingCol(null);
    setResizingRow(null);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizingCol, resizingRow, startX, startY, initWidth, initHeight, colWidths]);

  // --- Adding rows and columns ---
  const addRow = () => {
    const newRow = Array.from({ length: colWidths.length }, () => "");
    setData([...data, newRow]);
    setRowHeights([...rowHeights, DEFAULT_ROW_HEIGHT]);
  };
  const addColumn = () => {
    const newData = data.map((row) => [...row, ""]);
    setData(newData);
    setColWidths([...colWidths, DEFAULT_COL_WIDTH]);
  };

  // --- CSV Export ---
  const exportCSV = () => {
    const csv = data
      .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "spreadsheet.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4">
      <div className="mb-2 flex gap-2">
        <Button onClick={addRow}>Add Row</Button>
        <Button onClick={addColumn}>Add Column</Button>
        <Button onClick={exportCSV}>Export CSV</Button>
      </div>
      <div className="overflow-auto">
        <table className="border-collapse" style={{ width: "100%" }}>
          <tbody>
            {data.map((row, rowIndex) => (
              // Wrap each data row and its row-resizer in a Fragment
              <React.Fragment key={rowIndex}>
                <tr style={{ height: rowHeights[rowIndex] }}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      style={{
                        width: colWidths[colIndex],
                        position: "relative",
                        border: "1px solid #ccc",
                        padding: "4px",
                        overflow: "hidden",
                      }}
                      onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
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
                        cell
                      )}
                      {/* Column Resizer: show in every cell except the last one */}
                      {colIndex < row.length - 1 && (
                        <div
                          onMouseDown={(e) => handleColResizerMouseDown(colIndex, e)}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: "5px",
                            height: "100%",
                            cursor: "ew-resize",
                            userSelect: "none",
                          }}
                        />
                      )}
                    </td>
                  ))}
                </tr>
                {/* Row Resizer: render an extra row below each row except the last one */}
                {rowIndex < data.length - 1 && (
                  <tr style={{ height: "5px" }}>
                    <td
                      colSpan={row.length}
                      style={{ padding: 0, border: "none", position: "relative" }}
                    >
                      <div
                        onMouseDown={(e) => {
                          setResizingRow(rowIndex);
                          setStartY(e.clientY);
                          setInitHeight(rowHeights[rowIndex]);
                          e.stopPropagation();
                        }}
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: "5px",
                          cursor: "ns-resize",
                          userSelect: "none",
                          background: "#ddd",
                        }}
                      ></div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
