'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Policies } from './policies';

export function PoliciesTable({
  policies,
}: {
  policies: any[];
}) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Policies</CardTitle>
        <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Base Price</TableHead>
              <TableHead>Type of Policy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policies) => (
              <Policies key={policies.policy_id} policies={policies} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
