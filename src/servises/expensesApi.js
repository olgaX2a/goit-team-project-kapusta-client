import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export class ExpensesAPI {
  static async fetchExpensesList() {
    const { data } = await axios.get('/expenses');

    return data;
  }

  static async createExpens(expen) {
    const { data } = await axios.post('/contacts', expen);

    return data;
  }

  static async deleteExpen(expensId) {
    await axios.delete(`/expenses/${expensId}`);
  }

  static async patchExpens(expensId) {
    const { data } = await axios.patch(`/expenses/${expensId}`);
    return data;
  }
}
