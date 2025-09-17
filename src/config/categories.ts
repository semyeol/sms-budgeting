export const INCOME_CATEGORIES = [
    'Work',
    'Other'
] as const; // each elt is a type, not just a string

export const SAVINGS_CATEGORIES = [
    'Wealthfront',
] as const;

export const INVESTING_CATERGORIES = [
    'Fidelity',
] as const;

export const BILLS_CATEGORIES = [
    'Parents',
    'Wifi',
    'Gym',
    'Subscriptions',
] as const;

export const EXPENSE_CATEGORIES = [
    'Eating Out',
    'Shopping',
    'Activity',
    'Grocery',
    'Gas',
    'School',
    'Other',
] as const;

export type IncomeCategory = typeof INCOME_CATEGORIES[number]; // create union of types
export type SavingsCategory = typeof SAVINGS_CATEGORIES[number];
export type InvestingCategory = typeof INVESTING_CATERGORIES[number];
export type BillsCategory = typeof BILLS_CATEGORIES[number];
export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];