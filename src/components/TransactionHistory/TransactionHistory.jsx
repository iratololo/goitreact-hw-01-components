import PropTypes from 'prop-types';

import { Table, TableHead, TableHeadItem, TableItem, TableRow } from "./TransactionHistory.stayled"

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map((item) => <TableRow key={item.id}>
        <TableItem>{item.type}</TableItem>
        <TableItem>{item.amount}</TableItem>
        <TableItem>{item.currency}</TableItem>
        </TableRow>)}
      </tbody>
    </Table>
  )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TransactionHistory;