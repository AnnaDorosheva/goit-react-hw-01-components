import React from "react";
import Transaction from "./Transaction";
import PropTypes from "prop-types";
import s from './TransactionsHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={s.transactionhistory}>
    <thead className={s.head}>
      <tr className={s.headLine}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr className={s.headLine} key={item.id}>
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired
};
export default TransactionHistory;
