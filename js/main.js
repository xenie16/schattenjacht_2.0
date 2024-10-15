"use strict";

class Wall {
   constructor({ position }) {
      this.canvas = document.getElementById("gameCanvas");
      this.ctx = this.canvas.getContext("2d");

      this.minDimension = Math.min(window.innerWidth, window.innerHeight);
      this.canvas.width = this.minDimension;
      this.canvas.height = this.minDimension;

      this.cellWidth = this.canvas.width / 15;
      this.cellHeight = this.canvas.height / 15;

      this.position = position;
   }

   draw() {
      this.ctx.fillStyle = "#B32D00";
      this.ctx.fillRect(this.position.x, this.position.y, this.cellWidth, this.cellHeight);
   }

   static generateWalls(rows, columns, wallsNeeded) {
      const instance = new Wall({ position: { x: 0, y: 0 } });
      let map = Wall.generate2DArray(rows, columns);
      Wall.getRandomPosition(map, rows, columns, wallsNeeded);

      let walls = [];

      map.forEach((row, rowIndex) => {
         row.forEach((cell, columnIndex) => {
            if (cell === '1') {
               walls.push(new Wall({
                  position: {
                     x: instance.cellWidth * columnIndex,
                     y: instance.cellHeight * rowIndex
                  }
               }));
            }
         });
      });

      walls.forEach((wall) => {
         wall.draw();
      });

      return walls;
   }

   static generate2DArray(rows, columns) {
      return Array.from({ length: rows }, () =>
         Array.from({ length: columns }, () => '0')
      );
   }

   static getRandomPosition(map, rows, columns, wallsNeeded) {
      for (let i = 0; i < wallsNeeded; i++) {
         const x = Math.floor(Math.random() * columns);
         const y = Math.floor(Math.random() * rows);

         if (map[y][x] === '0') {
            map[y][x] = '1';
         }
      }
   }
}

const walls = Wall.generateWalls(15, 15, 10);

console.log(walls);
