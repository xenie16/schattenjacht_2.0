"use strict";

export class CanvasManager {
   constructor({ canvas }) {
      if (!canvas) {
         throw new Error("A valid canvas element must be provided.");
      }

      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");

      this.minDimension = Math.min(window.innerWidth, window.innerHeight);
      this.canvas.width = this.minDimension;
      this.canvas.height = this.minDimension;
   }
}