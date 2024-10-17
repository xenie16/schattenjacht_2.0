"use strict";

import { Entity } from "./Entity.js";

export class Treasure extends Entity {
   constructor({ position, rows, cols, cellWidth, cellHeight, treasureId, treasureColor, numTreasures, ctx, treasureShape }) {
      super(position, rows, cols, cellWidth, cellHeight, treasureId, treasureColor, numTreasures, ctx, treasureShape);
   }
}