import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { SignInButton } from "@/components/app/signin-button";

export default async function HomePage() {
  const session = await getServerSession();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-2 min-h-[calc(100vh_-_4.8125rem)]">
      <h1 className="text-3xl font-bold text-center">Welcome to EcoSave 😀</h1>
      <p className="text-muted-foreground text-center">
        Please sign in to continue
      </p>
      <SignInButton />
    </div>
  );
}
