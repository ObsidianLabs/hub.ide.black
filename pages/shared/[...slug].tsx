import Image from 'next/image'
import Link from 'next/link';
import { NextSeo } from 'next-seo'

const ProjectItem = ({ project }: any) => {
	const userInfo = project.user[0]
	return (
		<>
			<NextSeo
				title={`${project.name} shared by Black IDE: Cloud-based Graphic EVM Solidity IDE`}
				description="Black IDE is a cross-platform graphic IDE for smart contract development on Ethereum and EVM-compatible blockchains. Enjoy a brand-new unified solidity dev experience with complete solidity development toolchains anywhere you code and deploy instantly to Ethereum, BNB, Avalanche, Polygon, Fantom, and more ...."
				openGraph={{
					url: 'https://ide.black',
					title: `${project.name} shared by Black IDE: Cloud-based Graphic EVM Solidity IDE`,
					description: "Black IDE is a cross-platform graphic IDE for smart contract development on Ethereum and EVM-compatible blockchains. Enjoy a brand-new unified solidity dev experience with complete solidity development toolchains anywhere you code and deploy instantly to Ethereum, BNB, Avalanche, Polygon, Fantom, and more ....",
					images: [
						{
							url: `${process.env.NEXT_PUBLIC_OG_IMG_SERVICE_URL}/${project.name}.png`,
							width: 800,
							height: 460,
							alt: 'Black IDE',
							type: 'image/jpeg',
						}
					],
					site_name: 'Black IDE',
				}}
				twitter={{
					handle: '@obsidian_labs',
					site: '@obsidian_labs',
					cardType: 'summary_large_image',
				}}
			/>
			<div className="container flex flex-row content-center pt-24 mx-auto">
				<div className='w-1/3 p-8 mx-auto bg-white rounded-md'>
					<div className='text-black'>
						<h3 className='mb-4 text-xl'>{userInfo.username} shared a project for you.</h3>
						<div className='overflow-hidden rounded-md'>
							<Image src={`${process.env.NEXT_PUBLIC_OG_IMG_SERVICE_URL}/${project.name}.png`} layout='responsive' width='100%' height='60px' />
						</div>
					</div>
					<div className='mt-4'>
						<a href={`https://ide.black/${userInfo.username}/${project.name}`} target='_blank'>
							<button
								type="button"
								className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-indigo-100 border border-transparent rounded-md text-primary hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							>
								Open In Black IDE
							</button>
						</a>
						<Link href='/'>
							<button
								type="button"
								className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							>
								Back to home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export const getServerSideProps = async ({ query }: any) => {
	const [username, projectname] = query.slug
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/eth/project/public/${username}/${projectname}`)
	const project = await res.json()
	return {
		props: {
			project: project[0]
		},
	};
};

export default ProjectItem