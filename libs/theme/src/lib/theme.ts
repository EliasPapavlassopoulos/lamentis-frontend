/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type Theme as EthleteTheme, type OnThemeColorMap } from '@ethlete/theming';

const onColorDark: OnThemeColorMap = {
  default: '0 0 0',
};

export const MAGENTA = {
  name: 'magenta',
  isDefault: true,
  primary: {
    color: {
      default: '242 12 150',
      hover: '51 255 176',
      active: '0 229 140',
      disabled: '0 102 62',
    },
    onColor: onColorDark,
  },
} as const;

export const THEMES = [MAGENTA] satisfies EthleteTheme[];

export type Theme = (typeof THEMES)[number]['name'];

export const createTailwindCssVar = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
export const createTailwindRgbVar = (val: string | undefined) => (val ? `rgb(${val} / <alpha-value>)` : undefined);

export const createTailwindColorThemes = (themes: EthleteTheme[], prefix = 'et') => {
  const twThemes: Record<
    string,
    {
      DEFAULT: string;
      hover: string;
      focus: string;
      active: string;
      disabled: string;
    }
  > = {};

  for (const theme of themes) {
    const key = `${prefix}-${theme.name}`;

    twThemes[key] = {
      DEFAULT: createTailwindRgbVar(theme.primary.color.default)!,
      hover: createTailwindRgbVar(theme.primary.color.hover)!,
      focus: createTailwindRgbVar(theme.primary.color.focus) || createTailwindRgbVar(theme.primary.color.hover)!,
      active: createTailwindRgbVar(theme.primary.color.active)!,
      disabled: createTailwindRgbVar(theme.primary.color.disabled)!,
    };

    const keyOn = `${prefix}-on-${theme.name}`;

    twThemes[keyOn] = {
      DEFAULT: createTailwindRgbVar(theme.primary.onColor.default)!,
      hover: createTailwindRgbVar(theme.primary.onColor.hover) || createTailwindRgbVar(theme.primary.onColor.default)!,
      focus:
        createTailwindRgbVar(theme.primary.onColor.focus) ||
        createTailwindRgbVar(theme.primary.onColor.hover) ||
        createTailwindRgbVar(theme.primary.onColor.default)!,
      active:
        createTailwindRgbVar(theme.primary.onColor.active) || createTailwindRgbVar(theme.primary.onColor.default)!,
      disabled:
        createTailwindRgbVar(theme.primary.onColor.disabled) || createTailwindRgbVar(theme.primary.onColor.default)!,
    };
  }

  return twThemes;
};
