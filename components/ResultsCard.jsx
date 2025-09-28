export default function ResultsCard({ quiz }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Generated Questions
      </h2>
      <div className="space-y-6">
        {quiz.map((q, index) => (
          <div
            key={index}
            className="p-4 border border-gray-100 rounded-lg bg-gray-50 shadow-sm"
          >
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Question {index + 1}:
            </p>
            <p className="text-gray-700 mb-3">{q.question}</p>
            <p className="text-sm font-medium text-indigo-600 border-t pt-2 mt-2">
              Answer:
            </p>
            <p className="text-sm text-gray-600">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
