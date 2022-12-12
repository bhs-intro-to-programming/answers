const makeBoard = () => {
  return [['', '', ''], ['', '', ''], ['', '', '']];
};

const makeMove = (mark, row, column) => {
  return { mark: mark, row: row, column: column };
};

const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark;
};

const allTheSame = (xs) => {
  for (let i = 1; i < xs.length; i++) {
    if (xs[0] !== xs[i]) return false;
  }
  return true;
};

const extractColumn = (board, c) => {
  let col = [];
  for (let r = 0; r < board.length; r++) {
    col.push(board[r][c]);
  }
  return col;
};

const recordMove = (moves, move) => {
  moves.push(move);
};

const rowForMove = (moves, idx) => {
  return moves[idx].row;
};

const placeMoves = (board, moves) => {
  for (let i = 0; i < moves.length; i++) {
    placeMark(board, moves[i]);
  }
};
