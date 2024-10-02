import AddCustomerPage from "./page-client";
import { db } from "@/db";

export default async function Page() {

  async function GetPolicies() {
    const policies = await db.insurance_policies.findMany();
    return policies
  }
  const data = await GetPolicies()

  // Calling the client side component from this server side
  return(
    <>
      <AddCustomerPage data={data}/>
    </>

  )
}