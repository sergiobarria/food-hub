import '@emotion/react';

interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

declare module '@emotion/react' {
  export interface Theme {
    space: number[];
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    fontWeights: {
      body: string;
      heading: string;
      bold: string;
    };
    fontFamily: {
      400: string;
      600: string;
      700: string;
    };
    colors: {
      primary?: string;
      darkBlue?: string;
    };
    shadows: {
      sm: Shadow;
      md: Shadow;
    };
  }
}
