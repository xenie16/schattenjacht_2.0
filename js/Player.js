"use strict";

import { Entity } from "./Entity.js";

export class Player extends Entity {
   constructor({ position, rows, cols, cellWidth, cellHeight, playerId, playerColor, numPlayers, ctx, playerShape }) {
      super(position, rows, cols, cellWidth, cellHeight, playerId, playerColor, numPlayers, ctx, playerShape);
   }
}