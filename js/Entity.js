"use strict";

export class Entity {

   static sharedMap = null;
   static entityRegistry = {};

   constructor(position, rows = 15, cols = 15, cellWidth, cellHeight, entityId, color, numEntities, ctx, shape) {
      this.position = position;
      this.ctx = ctx;

      this.rows = rows;
      this.cols = cols;

      this.cellWidth = cellWidth;
      this.cellHeight = cellHeight;

      this.entityId = entityId;
      this.numEntities = numEntities;
      this.color = color;
      this.shape = shape;

      if (!Entity.entityRegistry[entityId]) {
         Entity.entityRegistry[entityId] = {
            color: color,
            shape: shape
         };
      }

      if (Entity.sharedMap === null) {
         Entity.sharedMap = this.generate2DArray(this.rows, this.cols);
      }
   }

   draw(position, shape = this.shape, color = this.color) {
      this.ctx.fillStyle = color;
      switch (shape) {
         case 'rect':
            this.ctx.fillRect(position.x, position.y, this.cellWidth, this.cellHeight);
            break;
         case 'circle':
            this.ctx.beginPath();
            this.ctx.arc(position.x + this.cellWidth / 2, position.y + this.cellHeight / 2, this.cellWidth / 2, 0, 2 * Math.PI);
            this.ctx.fill();
            break;
      }
   }

   generateEntities() {
      let map = Entity.sharedMap;
      this.getRandomPosition(map);

      map.forEach((row, rowIndex) => {
         row.forEach((cell, columnIndex) => {
            if (cell === this.entityId) {
               const position = {
                  x: this.cellWidth * columnIndex,
                  y: this.cellHeight * rowIndex
               };

               this.draw(position);
            }
         });
      });

   }

   generate2DArray() {
      return Array.from({ length: this.rows }, () =>
         Array.from({ length: this.cols }, () => 0)
      );
   }

   getRandomPosition(map) {
      for (let i = 0; i < this.numEntities; i++) {
         let x, y;
         do {
            x = Math.floor(Math.random() * this.cols);
            y = Math.floor(Math.random() * this.rows);
         } while (map[y][x] !== 0);
         map[y][x] = this.entityId;
      }

   }

   findAllEntities(entityId) {
      let locations = [];

      Entity.sharedMap.forEach((row, rowIndex) => {
         row.forEach((cell, colIndex) => {
            if (cell === entityId) {
               locations.push({ x: colIndex, y: rowIndex });
            }
         });
      });


      return locations;
   }

   redrawAllEntities() {
      this.ctx.clearRect(0, 0, this.cols * this.cellWidth, this.rows * this.cellHeight);

      let containsPlayer = false;
      let containsTreasure = false;

      Entity.sharedMap.forEach((row, rowIndex) => {
         row.forEach((entityId, colIndex) => {

            if (entityId === 2) {
               containsPlayer = true;
            }
            if (entityId === 4) {
               containsTreasure = true;
            }

            if (entityId !== 0) {
               const position = { x: colIndex * this.cellWidth, y: rowIndex * this.cellHeight };
               const entityMetadata = Entity.entityRegistry[entityId];

               if (entityMetadata) {
                  this.draw(position, entityMetadata.shape, entityMetadata.color);
               }
            }
         });
      });

      setTimeout(() => {
         if (!containsPlayer) {
            alert('Game Over!');
            location.reload();
         }

         if (!containsTreasure) {
            alert('You Win!');
            location.reload();
         }
      }, 10);
   }
}
