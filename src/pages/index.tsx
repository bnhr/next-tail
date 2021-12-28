import type { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';

const Home: NextPage = () => (
  <Layout>
    <p className="text-3xl text-blue-900 font-semibold">
      hello from next.js and <span className="font-bold">tailwindcss</span>
    </p>
  </Layout>
);

export default Home;
