"use strict";

import { Entity } from "./Entity.js";

export class Player extends Entity {

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
      let players = this.findAllEntities(Player.id);

      let newMap = JSON.parse(JSON.stringify(Entity.sharedMap));

      players.forEach(player => {
         let x = player.x;
         let y = player.y;

         let newX = x;
         let newY = y;

         switch (key) {
            case 'ArrowUp':
               if (y > 0 && newMap[y - 1][x] === '0') {
                  newY = y - 1;
               }
               break;
            case 'ArrowDown':
               if (y < this.rows - 1 && newMap[y + 1][x] === '0') {
                  newY = y + 1;
               }
               break;
            case 'ArrowLeft':
               if (x > 0 && newMap[y][x - 1] === '0') {
                  newX = x - 1;
               }
               break;
            case 'ArrowRight':
               if (x < this.cols - 1 && newMap[y][x + 1] === '0') {
                  newX = x + 1;
               }
               break;
            default:
               console.warn("Invalid key pressed.");
               return;
         }

         newMap[y][x] = '0';
         newMap[newY][newX] = Player.id;
      });

      Entity.sharedMap = newMap;

      this.redrawAllEntities();
   }
}