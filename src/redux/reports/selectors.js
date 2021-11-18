const isLoading = state => state.reports.isLoading;
const error = state => state.reports.error;
const getChart = state => state.reports.chart;
const getIncome = state => state.reports.income;
const getExpense = state => state.reports.expense;
const getPeriod = state => state.reports.period;
const getReports = state => state.reports.groupedByCategory;

const reportsSelectors = {
  getReports,
  isLoading,
  error,
  getChart,
  getIncome,
  getExpense,
  getPeriod,
};

export default reportsSelectors;
