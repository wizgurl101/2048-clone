import express from "express";
import {
  generateGameBoardBasedMove,
  newGame,
} from "../controllers/gameLogicController";

const router = express.Router();

router.route("/game").get(generateGameBoardBasedMove);
router.route("/newGame").get(newGame);

export default router;
