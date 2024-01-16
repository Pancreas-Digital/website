import {
  Layout,
  Hero,
  Community,
  Technology,
  Blog,
  Workshop,
  Tutorial
} from '../components';

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
