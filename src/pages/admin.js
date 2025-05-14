export default function AdminPage() {
  const startQuiz = async () => {
    const res = await fetch('/api/quiz');
    const data = await res.json();
    console.log("Quiz Started:", data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <button onClick={startQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">
        Quiz Başlat
      </button>
    </div>
  );
}
