"use strict";

import { Entity } from "./Entity.js";

export class Player extends Entity {

   static id = 2
   static numEntities = 1
   static color = "#004D00"
   static shape = "circle"

   constructor({ position, rows, cols, cellWidth, cellHeight, ctx }) {
      super(
         position,
         rows,
         cols,
         cellWidth,
         cellHeight,
         Player.id,
         Player.color,
         Player.numEntities,
         ctx,
         Player.shape
      );
   }
}