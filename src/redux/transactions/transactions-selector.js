const getTransactions = state => state.transactions.intems;
const getIncomes = state => state.transactions.items.income;
const getExpense = state => state.transactions.items.expense;

const getIsLoading = state => state.transactions.isLoading;

const transactionSelectors = {
  getExpense,
  getIncomes,
  getTransactions,
  getIsLoading,
};

export default transactionSelectors;
