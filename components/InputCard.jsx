import { useState } from "react";

export default function InputCard({ onGenerate, loading }) {
  const [numQuestions, setNumQuestions] = useState(5);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return alert("Please provide source text.");
    if (numQuestions < 1 || numQuestions > 10)
      return alert("Number of questions must be 1-10.");
    onGenerate(text, numQuestions);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="md:w-1/4">
          <label
            htmlFor="num-questions"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of Questions (1-10)
          </label>
          <input
            type="number"
            id="num-questions"
            value={numQuestions}
            min="1"
            max="10"
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="md:w-3/4 flex items-end">
          <p className="text-xs text-gray-500 p-2 bg-yellow-50 rounded-lg border border-yellow-200 w-full">
            Note: The Gemini API Key must be added to your environment variables
            locally.
          </p>
        </div>
      </div>

      <label
        htmlFor="source-text"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Source Text for Quiz Generation
      </label>
      <textarea
        id="source-text"
        rows="8"
        placeholder="Paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-indigo-700 transition duration-150 disabled:opacity-50 flex items-center justify-center"
      >
        {loading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 
              0 5.373 0 12h4zm2 5.291A7.962 
              7.962 0 014 12H0c0 3.042 1.135 
              5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 
              1.875 0 112.652 2.652L10.582 16.07a4.5 
              4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 
              4.5 0 011.13-1.897l8.932-8.931zm0 
              0l2.572 2.572"
            />
          </svg>
        )}
        {loading ? "Generating..." : "Generate Quiz"}
      </button>
    </div>
  );
}
