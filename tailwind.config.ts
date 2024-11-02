import containerQueries from '@tailwindcss/container-queries';
import { type Config } from 'tailwindcss/types/config';
import {
    createTailwindColorThemes,
    createTailwindCssVar,
    THEMES,
} from './theme';

const cfg: Config = {
    content: ['./src/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            ...createTailwindColorThemes(THEMES, 'lamentis'),

            'lamentis-theme': {
                DEFAULT: createTailwindCssVar('et-color-primary'),
                hover: createTailwindCssVar('et-color-primary-hover'),
                focus: createTailwindCssVar('et-color-primary-focus'),
                active: createTailwindCssVar('et-color-primary-active'),
                disabled: createTailwindCssVar('et-color-primary-disabled'),
            },

            'lamentis-on-theme': {
                DEFAULT: createTailwindCssVar('et-color-on-primary'),
                hover: createTailwindCssVar('et-color-on-primary-hover'),
                focus: createTailwindCssVar('et-color-on-primary-focus'),
                active: createTailwindCssVar('et-color-on-primary-active'),
                disabled: createTailwindCssVar('et-color-on-primary-disabled'),
            },

            primary: '#20AE80',
            success: '#00FF9C',
            notice: '#FF8F58',
            error: '#FF5858',
        },
        fontSize: {
            base: '62.5%', // 1rem = 10px
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [containerQueries],
};

export default cfg;
