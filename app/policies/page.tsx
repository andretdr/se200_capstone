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
      <div className="bg-white h-96 rounded-lg">

        <section className="">
          <PoliciesTable policies={page} offset={newOffset} totalcount={totalCount}/>


        </section>
      </div>
    </main>
  );
}











// export default async function Page() {
//   const policyItems = await db.insurance_policies.findMany({
//     skip: offset,
//     take: 5,
//   });


//   return (
//     <main className="lg:container">
//       <div className="bg-white h-96 rounded-lg">

//         <section className="">
//           <PoliciesTable policies={policyItems} />


//         </section>
//       </div>
//     </main>
//   );
// }



