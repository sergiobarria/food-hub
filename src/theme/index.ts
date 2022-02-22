const themeLight = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  fontWeights: {
    body: '400',
    heading: '700',
    bold: '900',
  },
  fontFamily: {
    400: 'Poppins-Regular',
    600: 'Poppins-SemiBold',
    700: 'Poppins-Bold',
  },
  colors: {
    primary: '#FE724C', // orange
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
  },
};

const themeDark = {
  ...themeLight,
  colors: {
    darkBlue: '#2D2D3A',
  },
};

export { themeLight, themeDark };
