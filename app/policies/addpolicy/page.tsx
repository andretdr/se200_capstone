import AddPolicyPage from "./page-client";
import { db } from "@/db";



export default async function Page() {

  async function GetPolicyType() {
    const policyTypes = await db.policy_types.findMany();

    // const formatTypes = policyTypes.map((items)=>{
    //     return(
    //         `{label: ' + items.policy_type + ', value: ' + items.policy_type + '}`
    //     )
    // })
    return policyTypes
  }


  let policyTypes = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ]

  const data = await GetPolicyType()
  console.log(data);

  return(
    <>
      <AddPolicyPage data={data}/>
    </>

  )
}