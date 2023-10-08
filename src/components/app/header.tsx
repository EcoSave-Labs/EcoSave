import Link from "next/link";

import { ThemeToggle, UserIdentification } from ".";

export function Header() {
  return (
    <header className="border-b w-full py-4">
      <div className="container flex items-center justify-between">
        <Link
          href="/dashboard"
          className="font-bold text-xl focus:outline-primary py-2 rounded-md"
        >
          🌱 EcoSave
        </Link>
        <div className="flex gap-2">
          <UserIdentification />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
