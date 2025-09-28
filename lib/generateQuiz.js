export async function generateQuiz(text, numQuestions) {
  const GEMINI_API_KEY ="";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

  const systemPrompt = `You are a Quiz Generation Engine. Generate a structured JSON array of exactly ${numQuestions} questions and answers based ONLY on the given source text.`;

  const userQuery = `Generate ${numQuestions} comprehension questions from:\n\n${text}`;

  const responseSchema = {
    type: "ARRAY",
    items: {
      type: "OBJECT",
      properties: {
        question: { type: "STRING" },
        answer: { type: "STRING" },
      },
      required: ["question", "answer"],
    },
  };

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema,
    },
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(`API Error: ${JSON.stringify(errData)}`);
  }

  const result = await response.json();
  const jsonString = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!jsonString) throw new Error("No valid JSON in API response.");
  return JSON.parse(jsonString);
}

