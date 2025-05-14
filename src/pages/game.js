import { useKickChat } from "../hooks/useKickChat";
import {  useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import Leaderboard from "../components/Leaderboard";

export default function GamePage() {
  const [answers, setAnswers] = useState([]);
  
  useKickChat("seninkanalin", (msg) => {
    if (msg.type === "message") {
      setAnswers((prev) => [...prev, msg]);
    }
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Kick Quiz Game</h1>
      <QuizQuestion />
      <Leaderboard answers={answers} />
    </div>
  );
}
