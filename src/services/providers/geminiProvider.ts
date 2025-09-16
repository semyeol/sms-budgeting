import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

import type { IncomeCategory, SavingsCategory, BillsCategory, ExpenseCategory } from "../../config/categories";
import type { IncomeData, SavingsData, BillsData, ExpenseData, TransactionType, TransactionData, AIProvider } from "../aiService.ts"

const apiKey = process.env.GEMINI_API_KEY
console.log('API Key:', process.env.GEMINI_API_KEY ? 'Found' : 'Not found');
console.log('First 10 chars:', process.env.GEMINI_API_KEY?.substring(0, 10));
if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is required');
}

async function categorizeTransaction(rawText:string, knownType?: TransactionType): Promise<{
  type: TransactionType;
  data: TransactionData;
  confidence: number;
}> {
  const ai = new GoogleGenAI({apiKey: apiKey!}); 
  const config = {
    temperature: 0.1, // Low temperature for consistent categorization
    maxOutputTokens: 500,
  };
  const model = 'gemini-2.0-flash-lite';
  const prompt = buildPrompt(rawText, knownType);

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `You are financial transaction organizer. Analyze this transaction:`,
        },
      ],
    },
  ];

  const reponse = await ai.models.generateContentStream({
    model, 
    config, 
    contents,
  });

  return // the type, data, and confidence
}
