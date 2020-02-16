import {getSampleTransactions} from '../mockData/transactions'

export const actions = {
  GET_TRANSACTIONS: 'trasactions/GET',
}
export function getTransactions(userId) {
  return (dispatch) => {
    const trasactions = getSampleTransactions();
    dispatch({
      type: actions.GET_TRANSACTIONS,
      payload: trasactions,
    })
  }
};