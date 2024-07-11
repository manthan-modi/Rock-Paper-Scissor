import { useState } from "react"
import '../index.css'

export const ScoreBoard = ({userScore, compScore, winner})=> {
    return (
      <div>
        <h2>User Count is: {userScore}</h2>
        <h2>Computer Score is: {compScore}</h2>
        <h2>Winner: {winner}</h2>
      </div>
    );

}