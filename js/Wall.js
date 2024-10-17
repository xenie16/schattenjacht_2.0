"use strict";

import { Entity } from "./Entity.js";

export class Wall extends Entity {
   constructor({ position, rows, cols, cellWidth, cellHeight, wallId, wallColor, numWalls, ctx, wallShape }) {

      super(position, rows, cols, cellWidth, cellHeight, wallId, wallColor, numWalls, ctx, wallShape);
   }
}


