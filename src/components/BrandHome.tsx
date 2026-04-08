"use client";

import { useTheme } from "./ThemeProvider";
import { IncHome } from "./IncHome";

/**
 * Brand-aware homepage wrapper.
 * When brand is "inc", render the INC consultancy homepage.
 * Otherwise return null and let the server-rendered portfolio homepage show.
 */
export function BrandHome({ children }: { children: React.ReactNode }) {
  const { brand } = useTheme();

  if (brand === "inc") {
    return <IncHome />;
  }

  return <>{children}</>;
}
