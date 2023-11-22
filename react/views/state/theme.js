import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, pink, lightBlue } from '@mui/material/colors';

// https://mui.com/material-ui/customization/palette/
// https://m2.material.io/inline-tools/color/
//
export const builder = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    ...(prefersDarkMode
                        ? {
                              // Palette for dark mode
                              //
                              primary: {
                                  main: '#90caf9'
                              },
                              secondary: {
                                  main: '#ce93d8'
                              },
                              background: {
                                  default: '#121212',
                                  paper: '#121212'
                              },
                              text: {
                                  primary: '#fff',
                                  secondary: grey[500]
                              }
                          }
                        :
                          {
                              // Palette for light mode
                              //
                              primary: {
                                  main: 'rgba(239,20,130,0.55)'
                              },
                              secondary: {
                                  main: 'rgba(18,18,18,0.04)'
                              },
                              background: {
                                  default: grey[50],
                                  paper: grey[50]
                              },
                              text: {
                                  primary: 'rgba(24,24,24,0.87)',
                                  secondary: 'rgba(24,24,24,0.96)'
                              },
                              MuiSelect: {
                                  select: {
                                      color: '#fff'
                                  }
                              }
                          })
                }
            }),
        [prefersDarkMode]
    );
};
