"use strict";

export class CanvasManager {
   constructor({ canvas, rows = 15, cols = 15 }) {
      if (!canvas) {
         throw new Error("A valid canvas element must be provided.");
      }

      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");

      this.minDimension = Math.min(window.innerWidth, window.innerHeight);
      this.canvas.width = this.minDimension;
      this.canvas.height = this.minDimension;

      this.cellWidth = this.canvas.width / cols;
      this.cellHeight = this.canvas.height / rows;
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
}