import { useState } from 'react';
import '../index.css'
export const Button = ({onClicked})=> {
    return (
      <div className="grid grid-cols-3 gap-4 button">
        <button
          className=" flex flex-row grid flex justify-around"
          onClick={() => onClicked("Rock")} 
        >
          <img
            src="https://img.icons8.com/?size=40&id=37630&format=png&color=000000"
            alt="Rock"
          />
          Rock
        </button>
        <button
          className="flex flex-row grid flex justify-around"
          onClick={() => onClicked("Paper")}
        >
          <img
            src="https://img.icons8.com/?size=40&id=25593&format=png&color=000000"
            alt="Paper"
          />
          Paper
        </button>
        <button
          className=" flex flex-row grid flex justify-around"
          onClick={() => onClicked("Scissor")}
        >
          <img
            src="https://img.icons8.com/?size=40&id=Vqs27N6zu9by&format=png&color=000000"
            alt="Scissor"
          />
          Scissor
        </button>
      </div>
    );
}