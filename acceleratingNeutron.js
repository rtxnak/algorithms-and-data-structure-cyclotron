function acceleratingNeutron(MatrixSize) {
  if (MatrixSize < 4) {
    console.log("Invalid matrix size.");
    return;
  }

  const matrix = [];

  for (let i = 0; i < MatrixSize; i++) {
    const row = [];
    for (let j = 0; j < MatrixSize; j++) {
      if (i === 0) {
        row.push("n");
      } else {
        row.push(1);
      }
    }
    matrix.push(row);
  }

  return matrix;
}

module.exports = acceleratingNeutron;