"use strict";

import { MovableEntity } from "./MovableEntity.js";

export class Player extends MovableEntity {

   static id = 2;
   static numEntities = 1;
   static color = "#004D00";
   static shape = "circle";

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

   movePlayer(key) {
      this.move(key);
   }

   canMoveTo(targetId) {
      return targetId === 0 || targetId === 4;
   }
}
