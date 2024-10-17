"use strict";

import { Entity } from "./Entity.js";

export class Enemy extends Entity {

   static id = 3;
   static numEntities = 3;
   static color = "#FF0000";
   static shape = "circle";

   constructor({ position, rows, cols, cellWidth, cellHeight, ctx }) {
      super(
         position,
         rows,
         cols,
         cellWidth,
         cellHeight,
         Enemy.id,
         Enemy.color,
         Enemy.numEntities,
         ctx,
         Enemy.shape);
   }
}