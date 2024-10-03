import { Button } from "@/components/ui/button";
import { PoliciesTable } from "@/components/policies-table";
import { getPolicies } from "@prisma/client/sql"
import Link from "next/link";
import { db } from '@/db';


export async function fetchPage(offset: number) {
  let policyItems = await db.$queryRawTyped(getPolicies());

  const totalCount = policyItems.length;

  policyItems = policyItems.slice(offset, offset + 5)
  return {
    page: policyItems,
    newOffset: offset + 5,
    totalCount: totalCount
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
          <Link href='/policies/add' className="hover:underline">+ Add Policy</Link>
          </Button>
    </section>

      <div className="bg-white h-96 rounded-lg shadow-xl">

        <section className="">
          <PoliciesTable policies={page} offset={newOffset} totalcount={totalCount}/>


        </section>
      </div>
    </main>
  );
}