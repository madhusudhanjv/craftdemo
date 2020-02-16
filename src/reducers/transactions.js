import {actions} from '../actions/transactions';

import {getSampleTransactions} from '../mockData/transactions'

const rovers = (store, action) => {
  switch (action.type) {
    case actions.GET_TRANSACTIONS:
      return {
        ...store,
        transactions: action.payload,
      };
  }
  return store || { transactions: [] };
};

export default rovers;