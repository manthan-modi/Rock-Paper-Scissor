import {useState } from "react";
import { ScoreBoard } from "./ScoreBoard";
export const GameLogic = ({userOption}) => {
  console.log(userOption)
  const compOptions = ["Rock", "Paper", "Scissor"];
  const inde = Math.floor(Math.random() * compOptions.length);
  console.log(inde)
  const [value, setWinner] = useState({
    userScore: 0,
    compScore: 0,
    winner: "",
  });
  if (compOptions[inde] === userOption) {
    return (
      <div>
        <h1>Tie</h1>
        <ScoreBoard
          userScore={value.userScore}
          compScore={value.compScore}
          winner={value.winner}
        />
      </div>
    );
  } else if (compOptions[inde] === "Rock") {
    if (userOption === "Paper") {
      setWinner({ ...value, userScore: {...value.userScore + 1}, winner:{...value.winner= "User"}});
      return (
        <div>
          <h1>You Win</h1>;
          <ScoreBoard
            userScore={value.userScore}
            compScore={value.compScore}
            winner={value.winner}
          />
        </div>
      );
    } else {
            setWinner({
              ...value,
              compScore: { ...(value.compScore + 1) },
              winner: { ...(value.winner = "Computer") },
            });
      return (
        <div>
          <h1>You Lose</h1>;
          <ScoreBoard
            userScore={value.userScore}
            compScore={value.compScore}
            winner={value.winner}
          />
        </div>
      );
    }
  } else if (compOptions[inde] === "Paper") {
    if (userOption === "Scissor") {
      setWinner({
        ...value,
        userScore: { ...(value.userScore + 1) },
        winner: { ...(value.winner = "User") },
      });
      return (
        <div>
          <h1>You Win</h1>;
          <ScoreBoard
            userScore={value.userScore}
            compScore={value.compScore}
            winner={value.winner}
          />
        </div>
      );
    } else {
      setWinner({
        ...value,
        compScore: value.compScore + 1,
        winner: "Computer",
      });
      return (
        <div>
          <h1>You Lose</h1>;
          <ScoreBoard
            userScore={value.userScore}
            compScore={value.compScore}
            winner={value.winner}
          />
        </div>
      );
    }
  } else {
    if (userOption === "Rock") {
      setWinner({
        ...value,
        userScore: { ... (value.userScore + 1) },
        winner: { ...(value.winner = "User") },
      });
        return (
        <div>
          <h1>You Win</h1>;
          <ScoreBoard
            userScore={value.userScore}
            compScore={value.compScore}
            winner={value.winner}
          />
        </div>
      );
    } else {
      setWinner({
        ...value,
        compScore: { ...(value.compScore + 1) },
        winner: { ...(value.winner = "Computer") },
      });
      return (
        <div>
          <h1>You Lose</h1>;
          <ScoreBoard
            userScore={value.userScore}
            compScore={value.compScore}
            winner={value.winner}
          />
        </div>
      );
    }
  }
};