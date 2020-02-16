import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import moment from 'moment';

import './styles.css';

class ListTransactions extends React.Component {
  render() {
    const {transactions = []} = this.props;
    return (
      <div className="list-transactions-container">
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Description
              </th>
              <th>
                Amount
              </th>
              <th>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map((transaction, key) => {
                const date = moment(new Date(transaction.date)).format('MM-DD-YYYY');
                return (<tr key={key}>
                  <td>{transaction.id}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{date}</td>
                </tr>);
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

ListTransactions.propTypes = {
  transactions: PropTypes.array,
};

export default ListTransactions;
