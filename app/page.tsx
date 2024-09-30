import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Heicoders</h1>
      <Button className="mt-8">
        <Link href='/register' className="hover:underline">Create a New User</Link>
      </Button>
      <p className="font-bold">Made in Singapore</p>
    </main>
    // <>
    //   <h1 className="text-3xl font-bold underline">
    //     Hello world!
    //   </h1>
    //   
    // </>
  );
}
