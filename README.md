
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/6b7a23db-508d-4d55-9664-2a6b5f3895a0" />

<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/828455c0-bdd7-4dd3-962b-00cfb1d447e1" />


# React Snake 

A classic Snake game built with **React** to practice modern React patterns:
- custom hooks
- game loops
- keyboard input
- state-driven rendering
- clean separation of logic and UI

The project is intentionally written without external game libraries to focus on fundamentals.

---

## Features

- Start / restart game
- Keyboard controls (arrow keys)
- Random food spawning
- Snake growth
- Score tracking
- Wall collision
- Self collision
- Game over overlay
- Styled arcade-like UI

---

## Architecture Overview

The app is split into **three main layers**:

### 1. Game Logic (Hooks)
- `useSnake` — all Snake rules (movement, collisions, score)
- `useGameLoop` — time-based updates
- `useKeyboard` — keyboard input handling

### 2. Rendering (Components)
- `Game` — orchestration and state wiring
- `Board` — grid layout
- `Cell` — individual board tiles
- `Score` — UI display

### 3. Utilities
- `helpers` — random food generation
- `constants` — grid size, configuration

This keeps logic testable and UI dumb.

---

## Folder Structure
src/
├─ components/
│ ├─ Game/
│ ├─ Board/
│ ├─ Cell/
│ └─ UI/
│
├─ hooks/
│ ├─ useSnake.js
│ ├─ useGameLoop.js
│ └─ useKeyboard.js
│
├─ utils/
│ ├─ helpers.js
│ └─ constants.js
│
├─ App.jsx
├─ index.js
└─ index.css


---

## Controls

- Arrow keys — move the snake
- Start / Restart button — begin a new game

---

## Getting Started

```bash
npm install
npm start
