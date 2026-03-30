export type ThemeId = 'default' | 'healthcare' | 'fintech';

export interface ThemeTokens {
  '--demo-primary': string;
  '--demo-primary-hover': string;
  '--demo-accent': string;
  '--demo-radius': string;
  '--demo-bg': string;
  '--demo-bg-subtle': string;
  '--demo-text': string;
  '--demo-text-secondary': string;
  '--demo-border': string;
  '--demo-shadow': string;
}

export const themes: Record<ThemeId, ThemeTokens> = {
  default: {
    '--demo-primary': '#2563eb',
    '--demo-primary-hover': '#1e40af',
    '--demo-accent': '#06b6d4',
    '--demo-radius': '0.5rem',
    '--demo-bg': '#ffffff',
    '--demo-bg-subtle': '#f8fafc',
    '--demo-text': '#0f172a',
    '--demo-text-secondary': '#475569',
    '--demo-border': '#e2e8f0',
    '--demo-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  healthcare: {
    '--demo-primary': '#059669',
    '--demo-primary-hover': '#047857',
    '--demo-accent': '#14b8a6',
    '--demo-radius': '0.75rem',
    '--demo-bg': '#ffffff',
    '--demo-bg-subtle': '#f0fdf4',
    '--demo-text': '#064e3b',
    '--demo-text-secondary': '#065f46',
    '--demo-border': '#a7f3d0',
    '--demo-shadow': '0 2px 8px -2px rgb(5 150 105 / 0.15)',
  },
  fintech: {
    '--demo-primary': '#1e3a5f',
    '--demo-primary-hover': '#0f2744',
    '--demo-accent': '#d4a006',
    '--demo-radius': '0.25rem',
    '--demo-bg': '#ffffff',
    '--demo-bg-subtle': '#fefce8',
    '--demo-text': '#1e293b',
    '--demo-text-secondary': '#475569',
    '--demo-border': '#cbd5e1',
    '--demo-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.12)',
  },
};

export const themeLabels: Record<ThemeId, string> = {
  default: 'Default (Portfolio)',
  healthcare: 'Healthcare',
  fintech: 'FinTech',
};
