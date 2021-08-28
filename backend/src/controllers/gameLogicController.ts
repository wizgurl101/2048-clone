import { generateNewBoard } from "../helpers/generateGameBoard";

const newGame = (req, res) => {
  let gameBoard = generateNewBoard();
  //   let newGameBoard = insertTwoRandomTile(gameBoard);

  res.status(200).json(gameBoard);
};

export { newGame };
