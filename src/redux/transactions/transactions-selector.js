const getTransactions = state => state.transactions.items;

const getIsLoading = state => state.transaction.isLoading;

const transactionSelectors = {
  getTransactions,
  getIsLoading,
};

export default transactionSelectors;
