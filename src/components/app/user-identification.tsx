"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";

export function UserIdentification() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === "loading") return null;

  if (session && session.user) {
    const { image, name, email } = session.user;

    return (
      <Button variant="ghost" className="p-0 h-10" onClick={() => signOut()}>
        <div className="flex flex-col gap-1 mx-2 text-end">
          <span className="font-semibold leading-none">{name}</span>
          <small className="opacity-80 leading-none">
            @{email?.split("@")[0]}
          </small>
        </div>
        <Image
          width={48}
          height={48}
          src={image!}
          alt=""
          className="h-full w-auto rounded-md border"
        />
      </Button>
    );
  }

  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/dashboard",
        })
      }
    >
      SignIn
    </Button>
  );
}
