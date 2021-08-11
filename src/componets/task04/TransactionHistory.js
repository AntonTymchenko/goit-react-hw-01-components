import React from 'react';
import s from './Transaction.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead className={s.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={s.tbody}>
          <td className={s.itemsBody}>{type}</td>
          <td className={s.itemsBody}>{amount}</td>
          <td className={s.itemsBody}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistory;
