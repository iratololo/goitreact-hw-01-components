import styled from 'styled-components';

const Table = styled('table')`
table-layout: fixed;
width: 100%;
border-collapse: collapse;
border: 2px solid gray;
`
const TableHead = styled('thead')`
background-color: #4F2EE8;
color: #fff;
font-weight: 500;
text-transform: uppercase;
font-size: 18px;
border: 2px solid gray;
`
const TableHeadItem = styled('th')`
padding:15px;
border: 2px solid gray;
`
const TableItem = styled('td')`
border: 2px solid gray;
padding:10px;
text-transform: uppercase;
`
const TableRow = styled('tr')`
border: 2px solid gray;
`
export { Table, TableHead, TableHeadItem, TableItem, TableRow };