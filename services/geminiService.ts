
import { GoogleGenAI, Type } from "@google/genai";

// Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
// Correct initialization: always use new GoogleGenAI({ apiKey: process.env.API_KEY });
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getCareerRecommendation = async (answers: string[]) => {
  const ai = getAIClient();
  const prompt = `Based on these answers from a prospective student, recommend the best degree/program at Apollo Institute of Technology (Options: B.Tech, MBA, BBA, BCA, Diploma).
  Answers: ${answers.join(", ")}.
  Provide a concise recommendation title and a short 2-sentence reasoning focusing on their potential career path.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProgram: { type: Type.STRING, description: "The name of the program" },
            reasoning: { type: Type.STRING, description: "Reasoning for the choice" }
          },
          required: ["recommendedProgram", "reasoning"]
        }
      }
    });

    // Access the text property directly (not a method).
    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return {
      recommendedProgram: "B.Tech",
      reasoning: "Our Engineering Excellence program is versatile and suitable for technical career aspirations."
    };
  }
};
