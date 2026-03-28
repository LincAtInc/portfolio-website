"use client";

import { useTheme, brandConfig } from "./ThemeProvider";

export function ThemeSwitcher() {
  const { brand, theme, mode, setBrand, setTheme, setMode } = useTheme();
  const themes = brandConfig[brand as keyof typeof brandConfig]?.themes ?? [];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-surface-container-high/90 backdrop-blur-xl border border-outline-variant/20 rounded-xl px-4 py-2.5 shadow-lg">
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value as keyof typeof brandConfig)}
        className="bg-transparent text-on-surface text-xs font-medium border-none outline-none cursor-pointer"
      >
        {Object.entries(brandConfig).map(([key, cfg]) => (
          <option key={key} value={key} className="bg-surface text-on-surface">{cfg.label}</option>
        ))}
      </select>

      {themes.length > 1 && (
        <>
          <span className="text-outline-variant text-xs">/</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-transparent text-on-surface text-xs font-medium border-none outline-none cursor-pointer"
          >
            {themes.map((t) => (
              <option key={t.value} value={t.value} className="bg-surface text-on-surface">{t.label}</option>
            ))}
          </select>
        </>
      )}

      <span className="text-outline-variant text-xs">/</span>
      <button
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        className="text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer bg-transparent border-none"
      >
        {mode === "dark" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
