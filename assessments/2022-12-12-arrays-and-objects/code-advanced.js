const makeBoard = () => Array(3).fill().map(() => Array(3).fill(''));

const makeMove = (mark, row, column) => ({mark, row, column});

const placeMark = (board, {mark, row, column}) => { board[row][column] = mark; };

const allTheSame = (xs) => xs.reduce((acc, e) => acc && e === xs[0], true);

const extractColumn = (board, c) => board.map(row => row[c]);

const recordMove = (moves, move) => { moves.push(move); };

const rowForMove = (moves, idx) => moves[idx].row;

const placeMoves = (board, moves) => { moves.forEach((m) => placeMark(board, m)); };
