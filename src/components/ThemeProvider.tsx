"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Brand = "portfolio" | "healthcare" | "fintech" | "bennie-james";
type Theme = string;
type Mode = "light" | "dark";

interface ThemeContextValue {
  brand: Brand;
  theme: Theme;
  mode: Mode;
  setBrand: (brand: Brand) => void;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

const tokenSets: Record<string, Record<string, string>> = {
  "portfolio:default:dark": {},
  "healthcare:clinical:light": {
    "--color-primary": "#059669",
    "--color-primary-container": "#d1fae5",
    "--color-on-primary": "#ffffff",
    "--color-on-primary-container": "#064e3b",
    "--color-secondary": "#0d9488",
    "--color-secondary-container": "#ccfbf1",
    "--color-tertiary": "#2563eb",
    "--color-surface": "#f0fdf4",
    "--color-surface-container-low": "#ffffff",
    "--color-surface-container": "#ffffff",
    "--color-surface-container-high": "#f8fafc",
    "--color-on-surface": "#14532d",
    "--color-on-surface-variant": "#166534",
    "--color-background": "#ffffff",
    "--color-on-background": "#064e3b",
    "--color-outline-variant": "#bbf7d0",
  },
  "healthcare:clinical:dark": {
    "--color-primary": "#34d399",
    "--color-primary-container": "#064e3b",
    "--color-on-primary": "#064e3b",
    "--color-on-primary-container": "#d1fae5",
    "--color-secondary": "#5eead4",
    "--color-secondary-container": "#134e4a",
    "--color-tertiary": "#60a5fa",
    "--color-surface": "#0f2922",
    "--color-surface-container-low": "#0a1f1a",
    "--color-surface-container": "#14352b",
    "--color-surface-container-high": "#1a4035",
    "--color-on-surface": "#ecfdf5",
    "--color-on-surface-variant": "#a7f3d0",
    "--color-background": "#0a1f1a",
    "--color-on-background": "#d1fae5",
    "--color-outline-variant": "#166534",
  },
  "healthcare:wellness:light": {
    "--color-primary": "#7c3aed",
    "--color-primary-container": "#ede9fe",
    "--color-on-primary": "#ffffff",
    "--color-secondary": "#db2777",
    "--color-secondary-container": "#fce7f3",
    "--color-tertiary": "#0891b2",
    "--color-surface": "#ffffff",
    "--color-surface-container-low": "#faf5ff",
    "--color-surface-container": "#faf5ff",
    "--color-surface-container-high": "#f5f3ff",
    "--color-on-surface": "#1e1b4b",
    "--color-on-surface-variant": "#6b21a8",
    "--color-background": "#faf5ff",
    "--color-on-background": "#3b0764",
    "--color-outline-variant": "#ddd6fe",
  },
  "healthcare:wellness:dark": {
    "--color-primary": "#c4b5fd",
    "--color-primary-container": "#4c1d95",
    "--color-on-primary": "#4c1d95",
    "--color-secondary": "#f9a8d4",
    "--color-secondary-container": "#831843",
    "--color-tertiary": "#67e8f9",
    "--color-surface": "#1a1229",
    "--color-surface-container-low": "#0f0a1e",
    "--color-surface-container": "#231a34",
    "--color-surface-container-high": "#2e2240",
    "--color-on-surface": "#f5f3ff",
    "--color-on-surface-variant": "#c4b5fd",
    "--color-background": "#0f0a1e",
    "--color-on-background": "#ede9fe",
    "--color-outline-variant": "#5b21b6",
  },
  "fintech:corporate:light": {
    "--color-primary": "#1e3a5f",
    "--color-primary-container": "#dbeafe",
    "--color-on-primary": "#ffffff",
    "--color-secondary": "#b45309",
    "--color-secondary-container": "#fef3c7",
    "--color-tertiary": "#0f766e",
    "--color-surface": "#f8fafc",
    "--color-surface-container-low": "#ffffff",
    "--color-surface-container": "#ffffff",
    "--color-surface-container-high": "#f1f5f9",
    "--color-on-surface": "#1e293b",
    "--color-on-surface-variant": "#475569",
    "--color-background": "#ffffff",
    "--color-on-background": "#0f172a",
    "--color-outline-variant": "#cbd5e1",
  },
  "fintech:corporate:dark": {
    "--color-primary": "#93c5fd",
    "--color-primary-container": "#0f2744",
    "--color-on-primary": "#0c1d33",
    "--color-secondary": "#fbbf24",
    "--color-secondary-container": "#78350f",
    "--color-tertiary": "#5eead4",
    "--color-surface": "#111827",
    "--color-surface-container-low": "#0b1120",
    "--color-surface-container": "#1a2332",
    "--color-surface-container-high": "#243044",
    "--color-on-surface": "#f1f5f9",
    "--color-on-surface-variant": "#94a3b8",
    "--color-background": "#0b1120",
    "--color-on-background": "#e2e8f0",
    "--color-outline-variant": "#334155",
  },
  "fintech:consumer:light": {
    "--color-primary": "#6366f1",
    "--color-primary-container": "#e0e7ff",
    "--color-on-primary": "#ffffff",
    "--color-secondary": "#f43f5e",
    "--color-secondary-container": "#ffe4e6",
    "--color-tertiary": "#10b981",
    "--color-surface": "#fafafa",
    "--color-surface-container-low": "#ffffff",
    "--color-surface-container": "#ffffff",
    "--color-surface-container-high": "#f4f4f5",
    "--color-on-surface": "#27272a",
    "--color-on-surface-variant": "#71717a",
    "--color-background": "#ffffff",
    "--color-on-background": "#18181b",
    "--color-outline-variant": "#e4e4e7",
  },
  "fintech:consumer:dark": {
    "--color-primary": "#a5b4fc",
    "--color-primary-container": "#3730a3",
    "--color-on-primary": "#312e81",
    "--color-secondary": "#fb7185",
    "--color-secondary-container": "#881337",
    "--color-tertiary": "#6ee7b7",
    "--color-surface": "#18181b",
    "--color-surface-container-low": "#09090b",
    "--color-surface-container": "#27272a",
    "--color-surface-container-high": "#3f3f46",
    "--color-on-surface": "#f4f4f5",
    "--color-on-surface-variant": "#a1a1aa",
    "--color-background": "#09090b",
    "--color-on-background": "#fafafa",
    "--color-outline-variant": "#3f3f46",
  },
  "bennie-james:soulful:dark": {
    "--color-primary": "#fbbf24",
    "--color-primary-container": "#92400e",
    "--color-on-primary": "#92400e",
    "--color-secondary": "#fca5a5",
    "--color-secondary-container": "#7c2d12",
    "--color-tertiary": "#f5f0e8",
    "--color-surface": "#141414",
    "--color-surface-container-low": "#0a0a0a",
    "--color-surface-container": "#1e1e1e",
    "--color-surface-container-high": "#2a2a2a",
    "--color-on-surface": "#f5f0e8",
    "--color-on-surface-variant": "#a8a090",
    "--color-background": "#0a0a0a",
    "--color-on-background": "#f5f0e8",
    "--color-outline-variant": "#2a2218",
  },
  "bennie-james:soulful:light": {
    "--color-primary": "#b45309",
    "--color-primary-container": "#fef3c7",
    "--color-on-primary": "#ffffff",
    "--color-secondary": "#7c2d12",
    "--color-secondary-container": "#fecdd3",
    "--color-tertiary": "#f5f0e8",
    "--color-surface": "#ffffff",
    "--color-surface-container-low": "#faf6f0",
    "--color-surface-container": "#f5f0e8",
    "--color-surface-container-high": "#efe8db",
    "--color-on-surface": "#2a1f0d",
    "--color-on-surface-variant": "#6b5c3e",
    "--color-background": "#faf6f0",
    "--color-on-background": "#1a1207",
    "--color-outline-variant": "#e8dcc8",
  },
};

export const brandConfig: Record<Brand, { label: string; themes: { value: string; label: string }[] }> = {
  portfolio: { label: "Portfolio", themes: [{ value: "default", label: "Agentic Narrative" }] },
  healthcare: { label: "Healthcare", themes: [{ value: "clinical", label: "Clinical" }, { value: "wellness", label: "Wellness" }] },
  fintech: { label: "FinTech", themes: [{ value: "corporate", label: "Corporate" }, { value: "consumer", label: "Consumer" }] },
  "bennie-james": { label: "Bennie James", themes: [{ value: "soulful", label: "Soulful" }] },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<Brand>("portfolio");
  const [theme, setTheme] = useState<Theme>("default");
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const key = `${brand}:${theme}:${mode}`;
    const tokens = tokenSets[key];
    const root = document.documentElement;

    // Clear all overrides
    const allProps = new Set<string>();
    Object.values(tokenSets).forEach((set) => Object.keys(set).forEach((p) => allProps.add(p)));
    allProps.forEach((prop) => root.style.removeProperty(prop));

    // Apply new token set
    if (tokens) {
      Object.entries(tokens).forEach(([prop, value]) => {
        root.style.setProperty(prop, value);
      });
    }
  }, [brand, theme, mode]);

  const handleBrandChange = (newBrand: Brand) => {
    setBrand(newBrand);
    setTheme(brandConfig[newBrand].themes[0].value);
  };

  return (
    <ThemeContext.Provider value={{ brand, theme, mode, setBrand: handleBrandChange, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
