"use strict";

import { CanvasManager } from "./CanvasManager.js";
import { Wall } from "./Wall.js";
import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";
import { Treasure } from "./Treasure.js";

const canvas = document.getElementById("gameCanvas");

const rows = 15;
const cols = 15;

const canvasManager = new CanvasManager({ canvas, rows, cols });
let ctx = canvasManager.getContext();
let cellWidth = canvasManager.getCellWidth();
let cellHeight = canvasManager.getCellHeight();


let sharedConfig = { rows, cols, cellWidth, cellHeight, ctx };

const player = new Player(sharedConfig);
const enemy = new Enemy(sharedConfig);
const wall = new Wall(sharedConfig);
const treasure = new Treasure(sharedConfig);

const entities = [wall, player, enemy, treasure];

entities.forEach(entity => entity.generateEntities());

addEventListener("keydown", ({ key }) => {
   if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      player.movePlayer(key);
      enemy.moveEnemy();
   }
});

addEventListener("resize", () => {
   canvasManager.setCanvasDimensions();

   ctx = canvasManager.getContext();
   cellWidth = canvasManager.getCellWidth();
   cellHeight = canvasManager.getCellHeight();

   entities.forEach(entity => {
      entity.cellWidth = cellWidth,
         entity.cellHeight = cellHeight,
         entity.ctx = ctx
   });

   player.redrawAllEntities(); //redraws all entities, not only player
});