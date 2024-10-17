"use strict";

export class Entity {

   static sharedMap = null;

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

      if (Entity.sharedMap === null) {
         Entity.sharedMap = this.generate2DArray(this.rows, this.cols);
      }
   }

   draw(position) {
      this.ctx.fillStyle = this.color;
      switch (this.shape) {
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
}
