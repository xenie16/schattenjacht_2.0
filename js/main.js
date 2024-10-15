"use strict";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const minDimension = Math.min(window.innerWidth, window.innerHeight);
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

const walls = [
   new Wall({ position: { x: 0, y: 0 } }),
   new Wall({ position: { x: 0, y: 120 } }),
];

walls.forEach((wall) => {
   wall.draw();
})

function generate2DArray(rows, columns) {
   map = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => '0')
   );
}

function generateWalls(rows, columns) {
   generate2DArray(rows, columns);
   getRandomPosition(rows, columns);
}

generateWalls(15, 15)
console.log(map);

function getRandomPosition(rows, columns) {
   const x = Math.floor(Math.random() * columns);
   const y = Math.floor(Math.random() * rows);
   walls.push(new Wall({ position: { x: x, y: y } }));
}



window.addEventListener('resize', () => {
   const minDimension = Math.min(window.innerWidth, window.innerHeight);
   canvas.width = minDimension;
   canvas.height = minDimension;
});

// totalPositions = rows x cols;

// totalWallsNeeded = 3;

// position = [2, 6, 9];

// while (totalWallsNeeded > 0) {
//    generateWalls()
// }



// function generateWalls() {
//    randomPosition();
//    array.forEach(element => {
//    shove the walls into the positions
//    });
// }

// function randomPosition() {
//    Math.random() * totalPositions

//    uniquenesschecker of the position[]
//    totalWallsNeeded--;
// }

// map =
//    [
//       ['', ''[]],
//       [[], [], []],
//       [[], [], []]
//    ]