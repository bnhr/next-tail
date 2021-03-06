import Layout from '@/components/Layout/Layout'

function Home() {
	return (
		<Layout>
			<p className="flex flex-col items-center justify-between text-3xl font-semibold text-blue-900">
				Hello from <span className="text-medium">Next.js</span> and{' '}
				<span className="font-bold">Tailwind CSS</span>
			</p>
		</Layout>
	)
}

export default Home
