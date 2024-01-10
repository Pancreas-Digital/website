import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Community from '../components/Community';
import Technology from '../components/Technology';
import Blog from '../components/Blog';
import Workshop from '../components/Workshop';
import Tutorial from '../components/Tutorial';

const IndexPage  = () => (
  <Layout>
    <Hero />
    <Community />
    <Technology />
    <Workshop />
    <Blog />
    <Tutorial />
  </Layout>
);
export default IndexPage;
