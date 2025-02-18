/* script.js */
const socket = io();
const board = document.getElementById("board");
const playermove = document.getElementById("playermove");
const pl1p = document.getElementById("pl1p");
const pl2p = document.getElementById("pl2p");

let currentPlayer = "Player 1";
let scores = { "Player 1": 0, "Player 2": 0 };
let grid = Array(10).fill(null).map(() => Array(10).fill(""));

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.dataset.row = i;
        box.dataset.col = j;
        box.addEventListener("click", makeMove);
        board.appendChild(box);
    }
}

function makeMove(event) {
    const box = event.target;
    if (box.textContent) return;

    const symbol = currentPlayer === "Player 1" ? "S" : "O";
    box.textContent = symbol;
    const row = box.dataset.row;
    const col = box.dataset.col;
    grid[row][col] = symbol;

    socket.emit("move", { row, col, symbol, currentPlayer });
}

socket.on("move", ({ row, col, symbol, currentPlayer }) => {
    const boxes = document.querySelectorAll(".box");
    boxes[row * 10 + col].textContent = symbol;
    checkForSOS(row, col, symbol);
    switchPlayer();
});

function switchPlayer() {
    currentPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
    playermove.textContent = currentPlayer;
}

function checkForSOS(row, col, symbol) {
    // Implement SOS checking logic here
}

/* server.js */
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("move", (data) => {
        io.emit("move", data);
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
