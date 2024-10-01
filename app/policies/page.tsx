import { Button } from "@/components/ui/button";
import { PoliciesTable } from "@/components/policies-table";
import Link from "next/link";
import { db } from '@/db';

export default async function Page() {
  const policyItems = await db.insurance_policies.findMany();
  
  return (
    <main className="lg:container">
      <div className="bg-white h-96 rounded-lg">

        <section className="">
          <PoliciesTable policies={policyItems} />




        </section>
      </div>
    </main>
  );
}



