import PropTypes from 'prop-types';

import { Table } from "./Table.stayled"
import { TableHead } from "./TableHead.stayled"
import { TableHeadItem } from "./TableHeadItem.stayled"
import { TableRow } from "./TableRow.stayled"
import { TableItem} from "./TableItem.stayled"

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
    items: PropTypes.array,
}

export default TransactionHistory;