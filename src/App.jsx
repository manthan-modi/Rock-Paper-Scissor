import { useState } from 'react'
import './App.css'
import ProjectTitle from './Componnets/ProjectTitle.jsx'
import { Button } from './Componnets/Buttons'
import { ScoreBoard } from './Componnets/ScoreBoard.jsx';
function App() {
  const [value, setWinner] = useState({
    userScore:0,
    compScore:0,
    winner:"",
    userChoice: "",
    computerChoice: ""
  });
  const [gamneOver, setGameOver]  = useState(false);
  const onClicked = (userOption)=> {
    const compOptions = ["Rock", "Paper", "Scissor"];
    const inde = Math.floor(Math.random() * 3);
    if (compOptions[inde] === userOption) {
      setWinner({
        ...value,
        winner: "Tie",
        computerChoice: compOptions[inde],
        userChoice: userOption,
      });
    } else if (compOptions[inde] === "Rock") {
      if (userOption === "Paper") {
        setWinner({...value,userScore: value.userScore + 1, winner: "User", computerChoice: compOptions[inde], userChoice:userOption });
      } else {
        setWinner({
          ...value,
          compScore: value.compScore + 1,
          winner: "Computer",
          computerChoice: compOptions[inde],
          userChoice: userOption,
        });
      }
    } else if (compOptions[inde] === "Paper") {
      if (userOption === "Scissor") {
        setWinner({...value,userScore: value.userScore + 1, winner: "User" });
      } else {
        setWinner({
          ...value,
          compScore: value.compScore + 1,
          winner: "Computer",
          computerChoice: compOptions[inde],
          userChoice: userOption,
        });
      }
    } else {
      if (userOption === "Rock") {
        setWinner({...value,userScore: value.userScore + 1, winner: "User" });
      } else {
        setWinner({
          ...value,
          compScore: value.compScore + 1,
          winner: "Computer",
          computerChoice: compOptions[inde],
          userChoice: userOption,
        });
      }
    }
  }
  return (
    <>
      <ProjectTitle></ProjectTitle>
      <Button onClicked={onClicked}></Button>
      {value && <ScoreBoard value = {value}></ScoreBoard>}
     </> 
  )
}

export default App
