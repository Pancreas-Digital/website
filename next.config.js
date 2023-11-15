const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  return {
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
