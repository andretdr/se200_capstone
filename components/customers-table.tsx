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
import { Customers } from './customers';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CustomersTable({
  customers,
  offset,
  totalcount,
}: {
  customers: any[];
  offset: number;
  totalcount: number;
}) 
{
  let router = useRouter();
  let postsPerPage = 5;
  let totalPosts = totalcount;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/customers/?offset=${offset}`, { scroll: false });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Policies</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customers) => (
              <Customers key={customers.holder_id} customers={customers} />
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {Math.min(offset - postsPerPage, totalPosts) + 1}-{Math.min(offset, totalPosts)}
            </strong>{' '}
            of <strong>{totalPosts}</strong> posts
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === postsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset >= totalPosts}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
