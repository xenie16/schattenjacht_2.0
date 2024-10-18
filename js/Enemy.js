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

   moveEnemy() {
      let enemies = this.findAllEntities(Enemy.id);
      let newMap = Entity.sharedMap;

      enemies.forEach(enemy => {
         let x = enemy.x;
         let y = enemy.y;

         let newX = x;
         let newY = y;

         let direction = Math.floor(Math.random() * 4);

         switch (direction) {
            case 0: // up
               if (y > 0 && this.canMoveTo(newMap[y - 1][x])) {
                  newY = y - 1;
               }
               break;
            case 1: // down
               if (y < this.rows - 1 && this.canMoveTo(newMap[y + 1][x])) {
                  newY = y + 1;
               }
               break;
            case 2: // left
               if (x > 0 && this.canMoveTo(newMap[y][x - 1])) {
                  newX = x - 1;
               }
               break;
            case 3: // right
               if (x < this.cols - 1 && this.canMoveTo(newMap[y][x + 1])) {
                  newX = x + 1;
               }
               break;
         }

         newMap[y][x] = 0;
         newMap[newY][newX] = Enemy.id;
      });

      Entity.sharedMap = newMap;

      this.redrawAllEntities();
   }

   canMoveTo(targetId) {
      return targetId === 0 || targetId === 2;
   }
}