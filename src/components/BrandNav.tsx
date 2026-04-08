"use client";

import { useTheme } from "./ThemeProvider";
import { Nav } from "./Nav";
import { IncNav } from "./IncNav";

export function BrandNav() {
  const { brand } = useTheme();

  switch (brand) {
    case "inc":
      return <IncNav />;
    default:
      return <Nav />;
  }
}
