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
};

const Layout = ({children}: Props) => (
  <ChakraProvider theme={theme}>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XR9HVSZTNT" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XR9HVSZTNT');
      `,
        }}
      />
      <title>{process.env.siteTitle}</title>

      <meta property="og:title" content={process.env.siteTitle} />
      <meta property="og:description" content={process.env.siteDescription} />
      <meta property="og:image" content={process.env.siteUrl + '/' + process.env.siteLogo} />
      <meta property="og:url" content={process.env.siteUrl} />
      <meta property="og:site_name" content={process.env.siteName} />
      <meta name="twitter:card" content={process.env.twitterCard} />
      <meta name="twitter:image:alt" content={process.env.twitterImageAlt} />
      <meta name="twitter:site" content={process.env.twitterSite} />
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
