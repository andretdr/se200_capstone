'use server';

import { redirect } from "next/navigation";
import { db } from "@/db";

export default async function addCustomer(formData: {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  policyID: string,
}) {
//  console.log(formData.password);
  try{
    const policy = await db.policy_holders.create({
      data: {
        holder_id: formData.id,
        holder_email: formData.email,
        holder_first_name: formData.first_name,
        holder_last_name: formData.last_name,
      }
    });

    const policyType = await db.holder_to_policies.create({
      data: {
        policy_id: formData.policyID,
        holder_id: formData.id,
      }
    });

  }
  catch (error) {
    console.error(error);
  }

  redirect('/customers');

}