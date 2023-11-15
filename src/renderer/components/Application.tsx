import React from 'react';
import { Box, Flex, MantineProvider, createTheme } from '@mantine/core';
import { DoubleNavbar } from './Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  defaultRadius: 'lg',
});

const Application: React.FC = () => {
  return (
    <HashRouter>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <Flex>
          <DoubleNavbar />
          <Box p='md' style={{ overflowY: 'auto', height: '100vh' }}>
            <Routes>
              <Route path='/' element='Home' />
              <Route path='/repos' element='Repos' />
              <Route path='/settings' element='Settings' />
            </Routes>
          </Box>
        </Flex>
      </MantineProvider>
    </HashRouter>
  );
};

export default Application;
