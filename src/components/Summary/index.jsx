import React from "react";
import PropTypes from "prop-types";

import './styles.css';

class Summary extends React.Component {
  render() {
    const {transactions = [], threshold = 0} = this.props;
    

    const total = transactions.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0)

    const className = total < 0 ? 'red' : ((total >= 0 && total < threshold)) ? 'yellow' : 'green';

    return (
      <div className="summary-container">
        <div className={className}>Total: {total}</div>
      </div>
    );
  }
}

Summary.propTypes = {
  transactions: PropTypes.array,
  threshold: PropTypes.number,
};

export default Summary;
