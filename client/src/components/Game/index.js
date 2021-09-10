import React, { useState } from "react";

function Game() {

    window.addEventListener("click", function() {
        console.log('click');
    });

    return (
      <div id="board">
        <div className="player">
        0
        </div>
        <div className="enemy">
        
        </div>
      </div>
    );
  }
  
  export default Game;
  