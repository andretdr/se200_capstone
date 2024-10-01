import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from '@/db';

export default async function Page() {
  const policyItems = await db.insurance_policies.findMany();
  const formatPolicyItems = policyItems.map((item) => {
    return <div key={item.policy_id}>
              Policy name: {item.policy_name}
              Base Price: {item.base_price}
              </div>
  })
  
  return (
    <main className="lg:container">
      <div className="bg-white h-96 rounded-lg">

        <header className="py-6 px-12">
          <h1 className="text-lg font-semibold">Insurance Policies</h1>
          <h5 className="text-md font-extralight"> Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
        </header>

        <section className="">
          {formatPolicyItems}




        </section>


      </div>

    </main>
  );
}



