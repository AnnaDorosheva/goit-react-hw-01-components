import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import s from './TransactionsHistory.module.css';

const Transaction = ({ type, amount, currency }) => (
  <Fragment>
    <td className={s.tdLine}>{type}</td>
    <td className={s.tdLine}>{amount}</td>
    <td className={s.tdLine}>{currency}</td>
  </Fragment>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default Transaction;
