export default function handler(req, res) {
  const quizData = [
    { id: 1, question: "Bu bir örnek soru", options: ["A", "B", "C", "D"], correct: "A" },
  ];

  res.status(200).json(quizData);
}
