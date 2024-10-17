"use strict";

import { Entity } from "./Entity.js";

export class Wall extends Entity {

   static id = 1
   static numEntities = 5
   static color = "#B32D00"
   static shape = "rect"

   constructor({ position, rows, cols, cellWidth, cellHeight, ctx }) {

      super(
         position,
         rows,
         cols,
         cellWidth,
         cellHeight,
         Wall.id,
         Wall.color,
         Wall.numEntities,
         ctx,
         Wall.shape);
   }
}


