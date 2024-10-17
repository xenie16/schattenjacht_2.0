"use strict";

import { Entity } from "./Entity.js";

export class Enemy extends Entity {
   constructor({ position, rows, cols, cellWidth, cellHeight, enemyId, enemyColor, numEnemies, ctx, enemyShape }) {
      super(position, rows, cols, cellWidth, cellHeight, enemyId, enemyColor, numEnemies, ctx, enemyShape);
   }
}