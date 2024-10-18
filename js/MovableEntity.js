"use strict";

import { Entity } from "./Entity.js";

export class MovableEntity extends Entity {
   constructor(position, rows, cols, cellWidth, cellHeight, entityId, color, numEntities, ctx, shape) {
      super(
         position,
         rows,
         cols,
         cellWidth,
         cellHeight,
         entityId,
         color,
         numEntities,
         ctx,
         shape
      );
   }

   move(keyOrDirection) {
      let entities = this.findAllEntities(this.entityId);
      let newMap = Entity.sharedMap;

      entities.forEach(entity => {
         let x = entity.x;
         let y = entity.y;

         let newX = x;
         let newY = y;

         let direction = typeof keyOrDirection === 'string'
            ? keyOrDirection
            : Math.floor(Math.random() * 4);

         switch (direction) {
            case 'ArrowUp': case 0:
               if (y > 0 && this.canMoveTo(newMap[y - 1][x])) {
                  newY = y - 1

               };
               break;
            case 'ArrowDown': case 1:
               if (
                  y < this.rows - 1 && this.canMoveTo(newMap[y + 1][x])) {
                  newY = y + 1
               };
               break;
            case 'ArrowLeft': case 2:
               if (x > 0 && this.canMoveTo(newMap[y][x - 1])) {
                  newX = x - 1

               };
               break;
            case 'ArrowRight': case 3:
               if (x < this.cols - 1 && this.canMoveTo(newMap[y][x + 1])) {
                  newX = x + 1

               };
               break;
         }

         if (newX !== x || newY !== y) {
            newMap[y][x] = 0;
            newMap[newY][newX] = this.entityId;
         }
      });

      Entity.sharedMap = newMap;
      this.redrawAllEntities();
   }
}
