import summaryActions from './summary-actions';
import { fetchTransaction } from '../../services/summaryApi';

const getByMonth = () => async dispatch => {
  dispatch(summaryActions.getSummaryRequest());

  try {
    const response = await fetchTransaction();
    console.log(response);
    dispatch(summaryActions.getSummarySuccess(response));
  } catch (error) {
    dispatch(summaryActions.getSummaryError(error.message));
  }
};

export default {
  getByMonth,
};
