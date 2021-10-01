export class Matrix {
  private rawMatrix;
  constructor(rawMatrix: string) {
    this.rawMatrix = rawMatrix;
  }

  get rows(): number[][] {
    return parseRows(this.rawMatrix);
  }

  get columns(): number[][] {
    return transpose(this.rows);
  }
}

/** helper methods */
const parseRows = (rawMatrix: string) => {
  const rows = rawMatrix
    .split('\n')
    .map(e => e.split(" ")
      .map(Number));
  return rows;
}

const transpose = (rows: number[][]) => {
  const columns = rows[0]
    .map((_, i) => rows
      .map(row => row[i]));
  return columns;
}
