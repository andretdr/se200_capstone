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
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PoliciesTable({
  policies,
  offset,
  totalcount
}: {
  policies: any[];
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
    router.push(`/policies/?offset=${offset}`, { scroll: false });
  }

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

      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {Math.min(offset - postsPerPage, totalPosts) + 1}-{offset}
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
