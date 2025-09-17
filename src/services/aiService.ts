import type { IncomeCategory, SavingsCategory, InvestingCategory, BillsCategory, ExpenseCategory } from "../config/categories";

export type TransactionType = 'income' | 'savings' | 'investing' | 'bills' | 'expense';
export type TransactionData = IncomeData | SavingsData | InvestingData | BillsData | ExpenseData;

export interface AIProvider {
    categorizeTransaction(rawText:string, knownType?: TransactionType): Promise<{
        type: TransactionType;
        data: TransactionData;
        confidence: number;
    }>;
}

// interface for api shape validation
export interface IncomeData {
    description: string;
    amount: number;
    category: IncomeCategory;
    confidence: number;
}

export interface SavingsData {
    description: string;
    amount: number;
    category: SavingsCategory;
    confidence: number;
}

export interface InvestingData {
    description: string;
    amount: number;
    category: InvestingCategory;
    confidence: number;
}

export interface BillsData {
    description: string;
    amount: number;
    category: BillsCategory;
    confidence: number;
}

export interface ExpenseData {
    description: string;
    amount: number;
    category: ExpenseCategory;
    confidence: number;
}