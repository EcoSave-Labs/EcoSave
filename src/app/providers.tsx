"use client";

import { SessionContextProvider } from "@/contexts/session-provider";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionContextProvider>{children}</SessionContextProvider>
    </ThemeProvider>
  );
}
