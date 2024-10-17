"use strict";

import { CanvasManager } from "./CanvasManager.js";
import { Wall } from "./Wall.js";
import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";
import { Treasure } from "./Treasure.js";

const canvas = document.getElementById("gameCanvas");

const rows = 15;
const cols = 15;

const wallId = 1;
const playerId = 2;
const enemyId = 3;
const treasureId = 4;

const numWalls = 10;
const numPlayers = 1;
const numEnemies = 5;
const numTreasures = 5;

const wallColor = "#B32D00";
const playerColor = "#004D00";
const enemyColor = "#FF0000";
const treasureColor = "#FF8C00";

const wallShape = "rect";
const treasureShape = "rect";
const playerShape = "circle";
const enemyShape = "circle";

const canvasManager = new CanvasManager({ canvas, rows, cols });
const ctx = canvasManager.getContext();
const cellWidth = canvasManager.getCellWidth();
const cellHeight = canvasManager.getCellHeight();


const wall = new Wall({ rows, cols, cellWidth, cellHeight, wallId, numWalls, wallColor, ctx, wallShape });
wall.generateEntities();

const player = new Player({ rows, cols, cellWidth, cellHeight, playerId, numPlayers, playerColor, ctx, playerShape });
player.generateEntities();

const enemy = new Enemy({ rows, cols, cellWidth, cellHeight, enemyId, numEnemies, enemyColor, ctx, enemyShape });
enemy.generateEntities();

const treasure = new Treasure({ rows, cols, cellWidth, cellHeight, treasureId, numTreasures, treasureColor, ctx, treasureShape });
treasure.generateEntities();