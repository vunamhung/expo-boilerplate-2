const { fontFamily, spacing } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Inter: ['InterRegular', 'Helvetica Neue', ...fontFamily.sans],
      InterBold: ['InterBold', 'Helvetica Neue', ...fontFamily.sans],
      InterSemiBold: ['InterSemiBold', 'Helvetica Neue', ...fontFamily.sans],
      InterMedium: ['InterMedium', 'Helvetica Neue', ...fontFamily.sans],
      InterLight: ['InterLight', 'Helvetica Neue', ...fontFamily.sans],
    },
    gridAutoFit: {
      1: spacing[1],
      7: spacing[7],
    },
    gridAutoFill: {
      1: spacing[1],
      7: spacing[7],
    },
    extend: {
      colors: {
        black: '#141423',
        neutral: colors.slate,
        positive: colors.green,
        urge: colors.violet,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
      },
      maxWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      minHeight: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '4/5': '80vh',
      },
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme, addVariant }) => {
      addVariant('child', '&>*');
      matchUtilities(
        { 'grid-auto-fit': (value) => ({ gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))` }) },
        { values: theme('gridAutoFit') },
      );
      matchUtilities(
        { 'grid-auto-fill': (value) => ({ gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))` }) },
        { values: theme('gridAutoFill') },
      );
    }),
  ],
};
