'use server';

import { redirect } from "next/navigation";
import { db } from "@/db";

export default async function addPolicy(formData: {
  id: string,
  name: string,
  price: number,
  type: string,
}) {
//  console.log(formData.password);
  const user = await db.insurance_policies.create({
    data: {
      policy_id: formData.id,
      policy_name: formData.name,
      base_price: formData.price,
    }
  });


  redirect('/');
}