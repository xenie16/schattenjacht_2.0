"use strict";

export class CanvasManager {
   constructor({ canvas, rows = 15, cols = 15 }) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");

      this.rows = rows;
      this.cols = cols;
      this.setCanvasDimensions();
   }

   getContext() {
      return this.ctx;
   }

   getCellWidth() {
      return this.cellWidth;
   }

   getCellHeight() {
      return this.cellHeight;
   }

   setCanvasDimensions() {
      this.minDimension = Math.min(window.innerWidth, window.innerHeight);
      this.canvas.width = this.minDimension;
      this.canvas.height = this.minDimension;

      this.cellWidth = this.canvas.width / this.cols;
      this.cellHeight = this.canvas.height / this.rows;
   }
}