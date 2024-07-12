import { useState } from "react"
import '../index.css'

export const ScoreBoard = ({value})=> {
    return (
      <div>
        <div className="choice">
          <h2>Computer Choice: {value.computerChoice}</h2>
          <h2>User Choice: {value.userChoice}</h2>
        </div>
          <div className="score-board">
            <div className="score-count">
              <h2 >User Score is: {value.userScore}</h2>
            </div>
            <div>
              <h2 className="Winner">Winner: {value.winner}</h2>
            </div>
            <div className="score-count">
              <h2>Computer Score is: {value.compScore}</h2>
            </div>
          </div>
      </div>
    );

}