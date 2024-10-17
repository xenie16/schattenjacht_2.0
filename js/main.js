"use strict";

import { CanvasManager } from "./CanvasManager.js";
import { Wall } from "./Wall.js";
// import { Player } from "./Player.js";
// import { Enemy } from "./Enemy.js";
// import { Treasure } from "./Treasure.js";

const canvas = document.getElementById("gameCanvas");

const rows = 15;
const cols = 15;

const numWalls = 10;
const numPlayers = 1;
const numEnemies = 5;
const numTreasures = 5;

const wallColor = "#B32D00";

const canvasManager = new CanvasManager({ canvas, rows, cols });
const ctx = canvasManager.getContext();
const cellWidth = canvasManager.getCellWidth();
const cellHeight = canvasManager.getCellHeight();


const wall = new Wall({ rows, cols, cellWidth, cellHeight, numWalls, wallColor, ctx });
wall.generateEntities();

// const player = new Player({});
// const enemy = new Enemy({});
// const treasure = new Treasure({});