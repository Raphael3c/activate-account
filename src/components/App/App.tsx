import React from 'react';
import { Router } from 'components/Router'
import { ThemeProvider, Box, CssBaseline} from '@material-ui/core'
import { theme } from '_config/theme'
import { useStyle } from "./App.style";

export const App: React.FC = () => {

  const style = useStyle()
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={style.app}>
            <Router />
      </Box>
    </ThemeProvider>
  );
}