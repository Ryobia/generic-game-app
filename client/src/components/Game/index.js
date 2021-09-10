import React, { useState } from "react";
import ReactDOM from 'react-dom'
import arrow from '../../images/next.png';


function Game() {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);


    window.addEventListener("click", function() {
        console.log('click');

    });

    window.addEventListener("mousemove", function(e) {
      setMouseX(e.x);
      setMouseY(e.y);
      let player = document.getElementById('arrow');

      let playerX = (player.getBoundingClientRect().left) + (player.clientWidth / 2);
      let playerY = (player.getBoundingClientRect().top) + (player.clientHeight / 2);
      let radian = Math.atan2(e.x - playerX, e.y - playerY);
      let rot = (radian * (180 / Math.PI) * -1) + 88;
      player.style.transform = "rotate("+ rot + "deg)";

    });

    return (
      <div id="canvas">
        <div id="arrow" className="player">
        <img src={arrow} height="30px"/>
        </div>
        <div className="enemy">
        
        </div>
      </div>
    );
  }
  
  export default Game;
  