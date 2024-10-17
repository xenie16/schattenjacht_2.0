"use strict";

export class Entity {

   constructor(position, rows = 15, cols = 15, cellWidth, cellHeight, color, numEntities, ctx) {

      this.position = position;
      this.ctx = ctx;

      this.rows = rows;
      this.cols = cols;

      this.cellWidth = cellWidth;
      this.cellHeight = cellHeight;

      this.numEntities = numEntities;
      this.color = color;
   }

   draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.position.x, this.position.y, this.cellWidth, this.cellHeight);
   }

   generateEntities() {
      let map = this.generate2DArray(this.rows, this.cols);
      this.getRandomPosition(map);

      let entities = [];

      map.forEach((row, rowIndex) => {
         row.forEach((cell, columnIndex) => {
            switch (cell) {
               case '1':
                  entities.push(new Entity({
                     x: this.cellWidth * columnIndex,
                     y: this.cellHeight * rowIndex
                  }, this.rows, this.cols, this.cellWidth, this.cellHeight, this.color, this.numEntities, this.ctx));
                  break;
            }
         });
      });

      entities.forEach((entity) => {
         entity.draw();
      });

      console.log(map)
      return entities;
   }

   generate2DArray() {
      return Array.from({ length: this.rows }, () =>
         Array.from({ length: this.cols }, () => '0')
      );
   }

   getRandomPosition(map) {

      for (let i = 0; i < this.numEntities; i++) {
         const x = Math.floor(Math.random() * this.cols);
         const y = Math.floor(Math.random() * this.rows);

         if (map[y][x] === '0') {
            map[y][x] = '1';
         }
      }
   }
}
