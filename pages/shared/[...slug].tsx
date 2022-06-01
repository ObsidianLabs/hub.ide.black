import Image from 'next/image'
import Link from 'next/link';
import { NextSeo } from 'next-seo'

interface IBaseInfo  {
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface IUserInfo extends IBaseInfo {
	projectLimit: number;
	username: string;
	avatar: string;
	providers: any[];
}

interface IProject extends IBaseInfo {
	userId: String;
	name: number;
	public: boolean;
	user: IUserInfo[];
}

const ProjectItem = ({ project }: any) => {
	const userInfo = project.user[0]
	return (
		<>
			<NextSeo
				title={`${project.name} shared by Black IDE: Cloud-based Graphic EVM Solidity IDE`}
				description="Black IDE is a cross-platform graphic IDE for smart contract development on Ethereum and EVM-compatible blockchains. Enjoy a brand-new unified solidity dev experience with complete solidity development toolchains anywhere you code and deploy instantly to Ethereum, BNB, Avalanche, Polygon, Fantom, and more ...."
				openGraph={{
					url: 'https://ide.black',
					title: `Check out my project ${project.name} on Black IDE`,
					description: "Black IDE is a cross-platform graphic IDE for smart contract development on Ethereum and EVM-compatible blockchains. Enjoy a brand-new unified solidity dev experience with complete solidity development toolchains anywhere you code and deploy instantly to Ethereum, BNB, Avalanche, Polygon, Fantom, and more ....",
					images: [
						{
							url: `https://raw.githubusercontent.com/dandansad/images-servers/master/public/og_share_image.png`,
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
			<div className="container flex flex-row content-center pt-24 mx-auto font-open-sans">
				<div className='w-1/3 mx-auto bg-white rounded-md drop-shadow-card'>
					<div className='text-black'>
						<div className='overflow-hidden rounded-t-md'>
							<Image src={`${process.env.NEXT_PUBLIC_OG_IMG_SERVICE_URL}/${project.name}.png`} layout='responsive' width='100%' height='60px' />
						</div>
						<div className='py-4 text-center'>
							<div className='relative inline-block w-8 h-8 overflow-hidden rounded-full'>
								<Image className="inline-block w-6 h-6 ring-1 ring-white" layout='fill' src={userInfo.avatar} />
							</div>
							<h3 className='text-xl '>{userInfo.username} </h3>
							shared this project for you.
						</div>
					</div>
					<div className='px-4 py-4 text-center'>
						<a href={`https://ide.black/${userInfo.username}/${project.name}`} target='_blank'>
							<button
								type="button"
								className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-indigo-100 border border-transparent rounded-md text-primary hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							>
								Open In Black IDE
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export const getServerSideProps = async ({ query }: any) => {
	const [username, projectname] = query.slug
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/eth/project/public/${username}/${projectname}`)
	const project: IProject[] = await res.json()
	const filetedProject = project.find((project: IProject) => {
		if (project.user[0].username === username && project.name === projectname) return true
	})

	return {
		props: {
			project: filetedProject
		},
	};
};

export default ProjectItem