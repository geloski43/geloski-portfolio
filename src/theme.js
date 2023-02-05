import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#0c0f13', '#202023')(props),
    },
  }),
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
  Form: {
    variants: {
      floating: {
        container: {
          _focusWithin: {
            label: {
              ...activeLabelStyles,
            },
          },
          'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
            {
              ...activeLabelStyles,
            },
          label: {
            top: 0,
            left: 0,
            zIndex: 2,
            position: 'absolute',
            backgroundColor: 'white',
            pointerEvents: 'none',
            mx: 3,
            px: 1,
            my: 2,
            transformOrigin: 'left top',
          },
        },
      },
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
