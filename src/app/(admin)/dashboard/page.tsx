import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  return (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi fuga
      ipsum, est dignissimos asperiores nemo veritatis id sit nam ut et numquam
      commodi repudiandae. Doloremque dignissimos unde consequuntur deleniti
      consectetur!
    </p>
  );
}
