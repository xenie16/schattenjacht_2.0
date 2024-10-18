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

      let entities = [];

      map.forEach((row, rowIndex) => {
         row.forEach((cell, columnIndex) => {
            if (cell === this.entityId) {
               const position = {
                  x: this.cellWidth * columnIndex,
                  y: this.cellHeight * rowIndex
               };
               entities.push(position);
            }
         });
      });

      entities.forEach((position) => {
         this.draw(position);
      });

      return entities;
   }

   generate2DArray() {
      return Array.from({ length: this.rows }, () =>
         Array.from({ length: this.cols }, () => '0')
      );
   }

   getRandomPosition(map) {
      for (let i = 0; i < this.numEntities; i++) {
         let placed = false;
         while (!placed) {
            const x = Math.floor(Math.random() * this.cols);
            const y = Math.floor(Math.random() * this.rows);

            if (map[y][x] === '0') {
               map[y][x] = this.entityId;
               placed = true;
            }
         }
      }
   }

   findAllEntities(entityId) {
      let locations = [];

      for (let row = 0; row < Entity.sharedMap.length; row++) {
         for (let col = 0; col < Entity.sharedMap[row].length; col++) {
            if (Entity.sharedMap[row][col] === entityId) {
               locations.push({ x: col, y: row });
            }
         }
      }

      return locations;
   }

   // moveEntities(key) {
   //    let entities = this.findAllEntities();
   //    if (entities.length === 0) {
   //       console.error("No entities found to move.");
   //       return;
   //    }

   //    let newMap = JSON.parse(JSON.stringify(Entity.sharedMap));

   //    entities.forEach(entity => {
   //       let x = entity.x;
   //       let y = entity.y;

   //       let newX = x;
   //       let newY = y;

   //       switch (key) {
   //          case 'ArrowUp':
   //             if (y > 0 && Entity.sharedMap[y - 1][x] === '0') {
   //                newY = y - 1;
   //             }
   //             break;
   //          case 'ArrowDown':
   //             if (y < this.rows - 1 && Entity.sharedMap[y + 1][x] === '0') {
   //                newY = y + 1;
   //             }
   //             break;
   //          case 'ArrowLeft':
   //             if (x > 0 && Entity.sharedMap[y][x - 1] === '0') {
   //                newX = x - 1;
   //             }
   //             break;
   //          case 'ArrowRight':
   //             if (x < this.cols - 1 && Entity.sharedMap[y][x + 1] === '0') {
   //                newX = x + 1;
   //             }
   //             break;
   //          default:
   //             console.warn("Invalid key pressed.");
   //             return;
   //       }

   //       newMap[y][x] = '0';
   //       newMap[newY][newX] = this.entityId;
   //    });

   //    Entity.sharedMap = newMap;

   //    this.redrawAllEntities();
   // }

   redrawAllEntities() {
      this.ctx.clearRect(0, 0, this.cols * this.cellWidth, this.rows * this.cellHeight);

      for (let row = 0; row < Entity.sharedMap.length; row++) {
         for (let col = 0; col < Entity.sharedMap[row].length; col++) {
            const entityId = Entity.sharedMap[row][col];
            if (entityId !== '0') {
               const position = { x: col * this.cellWidth, y: row * this.cellHeight };

               const entityMetadata = Entity.entityRegistry[entityId];
               if (entityMetadata) {
                  this.draw(position, entityMetadata.shape, entityMetadata.color);
               }
            }
         }
      }
   }
}
