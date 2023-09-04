import {
  PaginatedRequestParams,
  PaginatedResponse,
  RequestByEmployeeParams,
  SetTransactionApprovalParams,
  Transaction,
  Employee,
} from "./types"
import mockData from "../mock-data.json"

const TRANSACTIONS_PER_PAGE = 5

const data: { employees: Employee[]; transactions: Transaction[] } = {
  employees: mockData.employees,
  transactions: mockData.transactions,
}

export const getEmployees = (): Employee[] => data.employees

export const getTransactionsPaginated = ({
  page,
}: PaginatedRequestParams): PaginatedResponse<Transaction[]> => {
  if (page === null) {
    throw new Error("Page cannot be null")
  }

  const start = page * TRANSACTIONS_PER_PAGE
  const end = start + TRANSACTIONS_PER_PAGE

  if (start > data.transactions.length) {
    throw new Error(`Invalid page ${page}`)
  }

  const nextPage = end < data.transactions.length ? page + 1 : null

  return {
    nextPage,
    data: data.transactions.slice(0, end),
  }
}

export const getTransactionsByEmployee = ({ employeeId }: RequestByEmployeeParams) => {
  if (!employeeId) {
    throw new Error("Employee id cannot be empty")
  }

  return data.transactions.filter((transaction) => transaction.employee.id === employeeId)
}

export const setTransactionApproval = ({ transactionId, value }: SetTransactionApprovalParams): void => {
  // Find the transaction with the given transactionId
  const transaction = data.transactions.find(
    (currentTransaction) => currentTransaction.id === transactionId
  );
  // data.transactions = data.transactions.filter(
  //   (currentTransaction) => currentTransaction.id === transactionId ?currentTransaction.approved=value:currentTransaction.approved
  // )
  // If no transaction is found with the provided transactionId, throw a custom error
  if (!transaction) {
    throw new Error("Transaction not found");
  }

  // Set the approval status of the transaction to the provided value
  transaction.approved = value;
};
