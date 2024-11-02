var cellMappings: any = {};

for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const cellKey = `c${row}${col}`;
    const checkCells = new Set();

    // Add all cells in the same row
    for (let c = 0; c < 9; c++) {
      if (c !== col) checkCells.add(JSON.stringify([row, c]));
    }

    // Add all cells in the same column
    for (let r = 0; r < 9; r++) {
      if (r !== row) checkCells.add(JSON.stringify([r, col]));
    }

    // Add all cells in the same 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (r !== row || c !== col) checkCells.add(JSON.stringify([r, c]));
      }
    }

    // Convert set to array and parse back from JSON
    cellMappings[cellKey] = Array.from(checkCells).map((cell:any) => JSON.parse(cell));
  }
}
console.log(cellMappings);

export default cellMappings as any;