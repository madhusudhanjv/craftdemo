import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ListTransactions from '../../components/ListTransactions';
import Summary from '../../components/Summary';

import {getTransactions} from '../../actions/transactions'

import './styles.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.updateTransactions = this.updateTransactions.bind(this);
  }
  state = {
    threshold: 100,
    searchText: '',
  }

  updateTransactions(text) {
    this.setState({
      searchText: text,
    })
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const {transactions = []} = this.props;
    const {threshold = 0, searchText} = this.state;

    const filteredTransactions = transactions.filter(transaction => {
      return transaction.description.includes(searchText);
    })

    return (
      <div>
        <input type="search" value={searchText} onInput={(event) => this.updateTransactions(event.target.value)} />
        <div class="list-transactions">
          <ListTransactions transactions={filteredTransactions} />
          <Summary transactions={transactions} threshold={threshold} />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  transactions: PropTypes.array,
  getTransactions: PropTypes.func,
};

const mapStateToProps = ({transactions}) => {
  return {
    transactions: transactions.transactions,
  };
};

const mapDispatchToProps = {getTransactions};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
