import { Button } from "@/components/ui/button";
import { CustomersTable } from "@/components/customers-table";
import Link from "next/link";
import { db } from '@/db';


export async function fetchPage(offset: number) {
  const customerItems = await db.policy_holders.findMany({
        skip: offset,
        take: 5,
        // select: { holder_id: true },
      });
  return {
    page: customerItems,
    newOffset: offset + 5,
  };
}


export default async function Page({ searchParams }) {
  const offset = searchParams.offset ?? 0;
  const { page, newOffset } = await fetchPage(
    Number(offset)
  );
  return (
    <main className="lg:container">
      <div className="bg-white h-96 rounded-lg">

        <section className="">
          <CustomersTable customers={page} offset={newOffset} />


        </section>
      </div>
    </main>
  );
}
