import AddPolicyPage from "./page-client";
import { db } from "@/db";

export default async function Page() {

  async function GetPolicyType() {
    const policyTypes = await db.policy_types.findMany();
    return policyTypes
  }
  const data = await GetPolicyType()

  // Calling the client side component from this server side
  return(
    <>
      <AddPolicyPage data={data}/>
    </>

  )
}