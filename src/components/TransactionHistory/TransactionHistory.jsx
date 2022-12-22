import PropTypes from 'prop-types';
import { TransactionHistoryTable, THead, TrColumn, TdString } from './TransactionHistory.styled';

export function TransactionHistory ({items}) {
  return (
<TransactionHistoryTable>
  <THead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </THead>
  <tbody>
{items.map (({ id, type, amount, currency }) => {
  return (
    <TrColumn key={id}>
      <TdString>{type}</TdString>
      <TdString>{amount}</TdString>
      <TdString>{currency}</TdString>
    </TrColumn>
  );
})}
  </tbody>
  </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}
