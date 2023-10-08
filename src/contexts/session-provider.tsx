"use client";

import nookies from "nookies";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface SessionContextProps {
  id_hash: string;
}

export const SessionContext = createContext<SessionContextProps>(
  {} as SessionContextProps
);

export function SessionContextProvider({ children }: { children: ReactNode }) {
  "use client";

  const [idHash, setIdHash] = useState<string | undefined>(
    nookies.get(null, "@ecosave/id_hash")?.["@ecosave/id_hash"] || undefined
  );

  useEffect(() => {
    if (!idHash && typeof window !== "undefined") {
      const randomIdHash =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      setIdHash(randomIdHash);
      nookies.set(null, "@ecosave/id_hash", randomIdHash, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
  }, [idHash]);

  return (
    <SessionContext.Provider value={{ id_hash: idHash! }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
