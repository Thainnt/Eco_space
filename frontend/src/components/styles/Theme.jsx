import { ThemeProvider } from "styled-components";

const theme = {
  fonts: {
    logo: 'Cinzel', 
    body: 'Cormorant Garamon', 
  }
}

const Theme = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;