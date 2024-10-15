"use strict";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let minDimension = Math.min(window.innerWidth, window.innerHeight);
canvas.width = minDimension;
canvas.height = minDimension;

class Wall {
   constructor({ position }) {
      this.position = position;
      this.cellWidth = canvas.width / 15;
      this.cellHeight = canvas.height / 15;
   }

   draw() {
      ctx.fillStyle = "#B32D00";
      ctx.fillRect(this.position.x, this.position.y, this.cellWidth, this.cellHeight);
   }
}

let map;

const walls = [];

let cellWidth = canvas.width / 15;
let cellHeight = canvas.height / 15;

generateWalls(15, 15, 10);

map.forEach((row, rowIndex) => {
   row.forEach((cell, columnIndex) => {
      switch (cell) {
         case '1':
            walls.push(new Wall({
               position: {
                  x: cellWidth * columnIndex,
                  y: cellHeight * rowIndex
               }
            }))
            break;

      }
   })
})

walls.forEach((wall) => {
   wall.draw();
})



function generateWalls(rows, columns, wallsNeeded) {
   generate2DArray(rows, columns);
   getRandomPosition(rows, columns, wallsNeeded);
}

function generate2DArray(rows, columns) {
   map = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => '0')
   );
}

function getRandomPosition(rows, columns, wallsNeeded) {
   for (let i = 0; i < wallsNeeded; i++) {
      const x = Math.floor(Math.random() * columns);
      const y = Math.floor(Math.random() * rows);

      if (map[y][x] === '0') {
         map[y][x] = '1';
      }
   }
}


console.log(map);

