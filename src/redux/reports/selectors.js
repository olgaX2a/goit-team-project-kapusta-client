const getReports = state => state.reports.data;
const isLoading = state => state.reports.isLoading;
const error = state => state.reports.error;
const getChart = state => state.reports.chart;

const reportsSelectors = {
  getReports,
  isLoading,
  error,
  getChart,
};

export default reportsSelectors;
