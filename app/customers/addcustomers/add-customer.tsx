'use server';

import { redirect } from "next/navigation";
import { db } from "@/db";

export default async function addCustomer(formData: {
  id: string,
  name: string,
  price: number,
  type: number,
}) {
//  console.log(formData.password);

  const policy = await db.insurance_policies.create({
    data: {
      policy_id: formData.id,
      policy_name: formData.name,
      base_price: formData.price,
    }
  });

  const policyType = await db.policy_to_types.create({
    data: {
      policy_id: formData.id,
      type_id: formData.type
    }
  });

  redirect('/policies');
}