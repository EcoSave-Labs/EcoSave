import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="container">
      <h1>TODO: Landing page...</h1>
    </div>
  );
}
