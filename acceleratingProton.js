function acceleratingProton(MatrixSize) {
  if (MatrixSize < 4) {
    console.log("Invalid matrix size.");
    return;
  }

  const matrix = [];

  for (let i = 0; i < MatrixSize; i++) {
    const row = [];
    for (let j = 0; j < MatrixSize; j++) {
      if (i === 0 || j === 0 || i === MatrixSize - 1 || j === MatrixSize - 1) {
        row.push("p");
      } else if (i === MatrixSize - 2) {
        if (j === 0 || j === MatrixSize - 2 || j === MatrixSize - 1) {
          row.push("p");
        } else {
          row.push(1);
        }
      } else {
        row.push(1);
      }
    }
    matrix.push(row);
  }

  matrix[MatrixSize - 1][MatrixSize - 1] = 1;

  return matrix;
}

module.exports = acceleratingProton;