import { useSnake } from "../../hooks/useSnake";
import { useGameLoop } from "../../hooks/useGameLoop";
import { useKeyboard } from "../../hooks/useKeyboard";

import { useState } from "react";
import Board from "../Board/Board";
import Score from "../UI/Score";

function Game() {
    const [direction, setDirection] = useState("RIGHT");
    const {
        food,
        snake,
        moveSnake,
        isGameOver,
        score
    } = useSnake();
    useKeyboard(direction, setDirection);

    useGameLoop(() => {
        moveSnake(direction);
    }, isGameOver);

    return (
        <>
            <Score value={score} />
            <Board snake={snake} food={food} />
        </>



    );
}

export default Game;