const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  return {
    async rewrites() {
        return [
            {
                source: '/registrate',
                destination: '/register'
            },
            {
                source: '/api/proxy/blog/:path*',
                destination: 'https://pancreasdigital.blogspot.com/:path*' // URL del servidor externo
            }
        ];
    },
    images: {
      domains: ['blogger.googleusercontent.com'],
    },
    env: {
      siteUrl: phase === PHASE_DEVELOPMENT_SERVER ? 'http://localhost:3000' : 'https://pancreas.digital',
      siteTitle: 'Pancreas Digital - Todo sobre tecnología aplicada a la diabetes',
      siteDescription: 'Pancreas Digital - xDrip+, Nightscout y todo sobre tecnología aplicada a la diabetes.',
      siteLogo: 'Vertical.jpg',
      siteName: 'Pancreas Digital',
      twitterCard: 'summary_large_image',
      twitterImageAlt: 'Pancreas Digital Logo',
      twitterSite: '@PancreasDigital',
    },
    reactStrictMode: true,
  };
};
