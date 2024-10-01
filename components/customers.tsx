import { TableCell, TableRow } from '@/components/ui/table';

export function Customers({ customers }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{customers.holder_id}</TableCell>
      <TableCell>{customers.holder_email}</TableCell>
      <TableCell>{customers.holder_first_name}</TableCell>
      <TableCell>{customers.holder_last_name}</TableCell>
      <TableCell>{}</TableCell>
    </TableRow>
  );
}