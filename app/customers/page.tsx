import { Button } from "@/components/ui/button";
import { CustomersTable } from "@/components/customers-table";
import { getCustomers } from "@prisma/client/sql"
import Link from "next/link";
import { db } from '@/db';


export async function fetchPage(offset: number) {
  let customerItems = await db.$queryRawTyped(getCustomers());
  const totalCount = customerItems.length;

  customerItems = customerItems.slice(offset, offset + 5)
  return {
    page: customerItems,
    newOffset: offset + 5,
    totalCount: totalCount,
  };
}


export default async function Page({ searchParams }) {
  const offset = searchParams.offset ?? 0;
  const { page, newOffset, totalCount } = await fetchPage(
    Number(offset)
  );
  return (
    <main className="lg:container">

      <section >
            <Button className="my-8">
            <Link href='/customers/add' className="hover:underline">+ Add Customers</Link>
            </Button>
      </section>

      <div className="bg-white h-96 rounded-lg">

        <section className="">
          <CustomersTable customers={page} offset={newOffset} totalcount={totalCount}/>


        </section>
      </div>
    </main>
  );
}
