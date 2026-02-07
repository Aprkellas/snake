import { useState } from "react";
import { getNextHead, checkCollision } from "./gameLogic";

export function useSnake() {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 15, y: 15 });
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    function moveSnake(direction) {
        setSnake(prev => {
            const head = getNextHead(prev[0], direction);

            if (checkCollision(head, prev)) {
                setIsGameOver(true);
                return prev;
            }

            const newSnake = [head, ...prev.slice(0, -1)];
            return newSnake;
            });
        }

        return { snake, food, score, moveSnake, isGameOver };
    }