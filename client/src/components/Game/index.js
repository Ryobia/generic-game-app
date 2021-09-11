import React, { useState, createRef, useRef } from "react";
import arrow from '../../images/arrow.png';


function Game() {
  

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);




    window.addEventListener("mousemove", function(e) {
      setMouseX(e.x);
      setMouseY(e.y);

    });

   let field = function()  {
      let player = document.getElementById('arrow');

      let playerX = (player.getBoundingClientRect().left) + (player.clientWidth / 2);
      let playerY = (player.getBoundingClientRect().top) + (player.clientHeight / 2);
      let radian = Math.atan2(mouseX - playerX, mouseY - playerY);
      let rot = (radian * (180 / Math.PI) * -1) + 90;
      player.style.transform = "rotate("+ rot + "deg)";
    }

   let fire = function() {
     let canvas = document.getElementById('canvas');
     let bullet = document.createElement('p');
     bullet.innerHTML = '⚫';
     bullet.classList.add('bullet');
     canvas.appendChild(bullet);
     let left = bullet.getBoundingClientRect().left;
     let top = bullet.getBoundingClientRect().top;
     let newLeft = mouseX - left;
     let newTop = mouseY - top;
     console.log(`mL:${mouseX}, mT:${mouseY}, L:${left}, T:${top}, NL:${newLeft}, NT:${newTop}`);
     bullet.style.left = `${newLeft}px`;
     bullet.style.top = `${newTop}px`;
   } 
  

    return (
      <div id="canvas" className="canvas" onMouseMove={field} onClick={fire}>
        <div id="arrow" className="player">
        <img id="playerIcon" src={arrow} height="30px" width="30px"/>
        </div>
        <div className="enemy">
        
        </div>
      </div>
    );
  }
  
  export default Game;
  