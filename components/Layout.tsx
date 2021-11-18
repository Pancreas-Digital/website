import React, { ReactNode } from 'react';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { ChakraProvider, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import theme from '../theme.fonts';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Pancreas Digital - Todo sobre tecnología aplicada a la diabetes' }: Props) => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box bg="blue.50" minHeight="100vh">
      <Navbar />
      <Box minHeight="91vh" textColor="blue.50">
        {children}
      </Box>
    </Box>
    <Footer />
  </ChakraProvider>
);

export default Layout;
