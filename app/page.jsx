"use client";

import { useState } from "react";
import Header from "@/components/Header";
import InputCard from "@/components/InputCard";
import ResultsCard from "@/components/ResultsCard";
import { generateQuiz } from "@/lib/generateQuiz";

export default function Home() {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async (text, numQuestions) => {
    setLoading(true);
    setError("");
    setMessage(`Generating ${numQuestions} questions...`);
    setQuiz([]);

    try {
      const result = await generateQuiz(text, numQuestions);
      setQuiz(result);
      setMessage("Quiz successfully generated!");
    } catch (err) {
      console.error("Quiz Generation Error:", err);
      setError("Failed to generate quiz. " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl space-y-6">
        <Header />
        <InputCard onGenerate={handleGenerate} loading={loading} />
        {quiz.length > 0 && <ResultsCard quiz={quiz} />}
        {(message || error) && (
          <div
            className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-xl text-white font-medium transition-opacity duration-300 z-50 ${
              error ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {error || message}
          </div>
        )}
      </div>
    </main>
  );
}
