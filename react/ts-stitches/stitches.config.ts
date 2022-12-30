import { createStitches } from '@stitches/react';
import { purple } from '@radix-ui/colors';

export const {
  styled,
  createTheme,
} = createStitches({
  utils: {
    mx: (value: number) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    px: (value: number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: number) => ({
      width: value,
      height: value,
    }),
  },

  media: {
    bp1: '(min-width: 350px) and (max-width: 450px)',
    bp2: '(min-width: 480px)',
    bp3: '(min-width: 500px)',
    bp4: '(min-width: 500px)',
    bp5: '(min-width: 500px)',
    bp6: '(min-width: 500px)',
    bp7: '(min-width: 500px)',
    bp8: '(min-width: 500px)',
  },

  theme: {
    colors: {
      ...purple,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fonts: {},
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fontWeights: {},
  },
});
