import React from "react";
import "./Popup.css";

const GamePopup = ({ onClose }) => {
  return (
    <div className="overlay2">
      <div className="popup2-container">
        <span className="close-button2" onClick={onClose}>
          &#10006;
        </span>
        <div className="popInstructions">
          <h2>Instructions</h2>
          <h3>Player 1</h3>
          <p>
            A: Move left<br />
            D: Move right<br />
            Z: Soft drop (faster down)<br />
            W: Rotate
          </p>
          <h3>Player 2</h3>
          <p>
            Left Arrow: Move left<br />
            Right Arrow: Move right<br />
            Down Arrow: Soft drop (faster down)<br />
            Up Arrow: Rotate
          </p>
        </div>
        <div className="popup-buttons2">
          <a href="https://thebestconstruction.netlify.app/theebest-tetris/single">
            <button id="singlePlay">1 Player</button>
          </a>
          <a href="https://thebestconstruction.netlify.app/theebest-tetris/double">
            <button id="doublePlay">2 Players</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamePopup;
