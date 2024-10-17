"use strict";

import { Entity } from "./Entity.js";

export class Wall extends Entity {
   constructor({ position, rows, cols, cellWidth, cellHeight, wallColor, numWalls, ctx }) {
      super(position, rows, cols, cellWidth, cellHeight, wallColor, numWalls, ctx);
   }
}


