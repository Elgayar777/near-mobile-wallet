import { Transaction, TransactionStatus, TransactionType } from "module/transaction/types";

export const mockedDAOTransaction: Transaction = {
    status: TransactionStatus.COMMITTED,
    type: TransactionType.DEPOSIT_DAO,
    amount: 100,
    transactionHash: "0x1234567890abcdef",
    inputs: [],
    outputs: [],
    blockHash: "0x1234567890abcdef",
    blockNumber: 1,
    timestamp: new Date(2022, 0, 29),
};

export const mockedDAODeposits: Transaction[] = [...Array(3)].map((_, i) => ({
    status: TransactionStatus.COMMITTED,
    type: TransactionType.DEPOSIT_DAO,
    amount: 145.2 * i + 2,
    transactionHash: "0x1234567890abcde" + i,
    inputs: [],
    outputs: [],
    blockHash: "0x1234567890abcde" + i,
    blockNumber: i,
    timestamp: new Date(2022, 0, i + 1),
}));

export const mockedDAOUnlocks: Transaction[] = [...Array(3)].map((_, i) => ({
    status: TransactionStatus.COMMITTED,
    type: TransactionType.UNLOCK_DAO,
    amount: 233 * i + 2,
    transactionHash: "0x1234567890abdededee" + i,
    inputs: [],
    outputs: [],
    blockHash: "0x1234567890deabcde" + i,
    blockNumber: i + 34,
    timestamp: new Date(2022, 0, i + 10),
}));
