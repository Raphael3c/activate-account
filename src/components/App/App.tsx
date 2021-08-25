import React from 'react';
import { Router } from 'components/Router'
import { ThemeProvider, Box } from '@material-ui/core'
import { theme } from '_config/theme'
import { useStyle } from "./App.style";

import './App.scss'

export const App: React.FC = () => {

  const style = useStyle()
  
  return (
    <ThemeProvider theme={theme}>
      <Box className={style.app}>
            <Router />
      </Box>
    </ThemeProvider>
  );
}