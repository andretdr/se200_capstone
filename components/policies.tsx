import { TableCell, TableRow } from '@/components/ui/table';

export function Policies({ policies }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{policies.policy_id}</TableCell>
      <TableCell>{policies.policy_name}</TableCell>
      <TableCell>{policies.base_price}</TableCell>
      <TableCell>{}</TableCell>
    </TableRow>
  );
}