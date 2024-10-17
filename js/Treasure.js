"use strict";

import { Entity } from "./Entity.js";

export class Treasure extends Entity {

   static id = 4;
   static numEntities = 5;
   static color = "#FF8C00";
   static shape = "rect";

   constructor({ position, rows, cols, cellWidth, cellHeight,
      ctx }) {
      super(
         position,
         rows,
         cols,
         cellWidth,
         cellHeight,
         Treasure.id,
         Treasure.color,
         Treasure.numEntities,
         ctx,
         Treasure.shape);
   }
}