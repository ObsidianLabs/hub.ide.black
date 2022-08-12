import Image from 'next/image'
import projectBgImg from '../../../public/project_bg.png'
import erc20Img from '../../../public/erc20.png'
import coinImg from '../../../public/coin.png'
import erc721Img from '../../../public/erc721.png'
import erc1155Img from '../../../public/erc1155.png'
import logoImg from '../../../public/logo.png'

const imageMap: any = {
	'erc-20': erc20Img,
	'coin': coinImg,
	'erc-721': erc721Img,
	'erc-1155': erc1155Img,
}

interface Props {
	projectName: string;
	createTime: string;
	userInfo: Record<string, any>
}

const ProjectCard = ({ projectName, createTime, userInfo }: Props) => {
	const isOfficial = userInfo.username === 'BlackIDE-ObsidianLab' && userInfo._id === '629043b6deaafb003395a1c9'

	if (!projectName) {
		return null
	}

	return (
		<div className='relative w-full overflow-hidden duration-300 ease-out border border-gray-800 rounded-md cursor-pointer hover:scale-105'>
			<a href={`https://ide.black/${userInfo.username}/${projectName}`} target='_blank'>
				<div>
					<div className='relative aspect-video'>
						{
							!isOfficial && <div className='absolute top-0 bottom-0 left-0 right-0 z-10 text-center'>
								<div className='relative w-8 h-8 mx-auto mt-4'>
									<Image layout='fill' className='aspect-video' src={logoImg} />
								</div>
								<h2 className='mt-2'>{projectName}</h2>
							</div>
						}
						<Image referrerPolicy='no-referrer' layout='fill' className='aspect-video' src={isOfficial ? imageMap[projectName.toLowerCase()] : projectBgImg} />
					</div>
					<div className='px-2 py-2 border-t-2 border-secondary'>
						<h3 className='overflow-hidden text-base text-white cursor-pointer hover:text-primary whitespace-nowrap text-ellipsis'>{projectName}</h3>
						<div className='flex justify-between mt-4 mb-2 text-sm text-gray-500'>
							<div className='flex items-center'>
								<div className='relative w-4 h-4 mr-2 overflow-hidden rounded-full aspect-square'>
									<Image crossOrigin='anonymous' layout='fill' loader={({ src }) => src} referrerPolicy='no-referrer' className="inline-block w-4 h-4 mr-2 overflow-hidden rounded-full ring-1 ring-white" height={24} src={userInfo.avatar} />
								</div>
								<span className='font-medium'>{userInfo.username}</span>
							</div>
							<span className='font-medium'>
								{createTime}
							</span>
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}

export default ProjectCard;