import { useSnake } from "../../hooks/useSnake";
import { useGameLoop } from "../../hooks/useGameLoop";
import { useKeyboard } from "../../hooks/useKeyboard";

import { useState } from "react";
import Board from "../Board/Board";
import Score from "../UI/Score";
import "./Game.css";

function Game() {
    const [direction, setDirection] = useState("RIGHT");
    const [isRunning, setIsRunning] = useState(false);

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
    }, !isRunning || isGameOver);

    return (
        <div className="app">
            <div className="console">
            <Board snake={snake} food={food} />
            <aside className="panel">
                <p>// use keyboard</p>
                <p>// arrows to play</p>
                <div className="score">
                  <Score score={score} />
                </div>
                <button 
                    className="start"   
                    onClick={() => setIsRunning(true)}
                >
                    start-game
                </button>
            </aside>
            </div>
        </div>
    );
}

export default Game;