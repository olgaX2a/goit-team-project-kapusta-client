import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export class TransactionAPI {
  static async fetchTransactionList(transactionType) {
    const { data } = await axios.get(`/transactions/${transactionType}`);

    return data;
  }

  static async createTransaction(transactionType, transOperation) {
    const { data } = await axios.post(`/transactions/${transactionType}`, transOperation);

    return data;
  }

  static async deleteTransaction(transactionType, transOperationId) {
    await axios.delete(`/${transactionType}/${transOperationId}`);
  }

  static async patchTransaction(transactionType, transOperationId) {
    const { data } = await axios.patch(`/${transactionType}/${transOperationId}`);
    return data;
  }
}
