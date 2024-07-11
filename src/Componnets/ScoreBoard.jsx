import { useState } from "react"
import '../index.css'

export const ScoreBoard = ({value})=> {
    return (
      <div>
        <h2>Computer Choice: {value.computerChoice}</h2>
        <h2>UserChoice: {value.userChoice}</h2>
        <h2 >User Count is: {value.userScore}</h2>
        <h2>Computer Score is: {value.compScore}</h2>
        <h2>Winner: {value.winner}</h2>
      </div>
    );

}