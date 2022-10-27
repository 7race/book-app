import 'styled-components';

interface ITheme {
  colors: {
    primary: string;
    primaryDark: string;
    darkReader: string;
    bookPrimary: string;
  };
  media: {
    mobile: string;
    tablet: string;
  };
  vars: {
    widthAppHeader: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
