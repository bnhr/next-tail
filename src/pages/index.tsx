import type { NextPage } from 'next'
import Layout from '@/components/Layout/Layout'

const Home: NextPage = () => (
  <Layout>
    <p className="flex flex-col items-center justify-between text-3xl font-semibold text-blue-900">
      hello from Next.js and <span className="font-bold">Tailwind CSS</span>
    </p>
  </Layout>
)

export default Home
