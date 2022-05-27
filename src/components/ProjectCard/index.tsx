import Image from 'next/image'
import Link from 'next/link';

const ProjectCard = ({ projectName, createTime, userInfo }: any) => {
	if (!projectName) {
		return null
	}

	return (
		<div className='relative w-full overflow-hidden duration-300 ease-out border border-gray-800 rounded-md cursor-pointer hover:scale-105'>
			<a href={`https://ide.black/${userInfo.username}/${projectName}`} target='_blank'>
				<div>
					<div className='relative aspect-video'>
						<img className='aspect-video' src={`${process.env.NEXT_PUBLIC_OG_IMG_SERVICE_URL}/${projectName}.png`} />
					</div>
					<div className='px-2 py-2 border-t-2 border-secondary'>
						<h3 className='overflow-hidden text-base text-white cursor-pointer hover:text-primary whitespace-nowrap text-ellipsis'>{projectName}</h3>
						<div className='flex justify-between mt-4 mb-2 text-sm text-gray-500'>
							<div className='flex items-center'>
								<img className="inline-block w-4 h-4 mr-2 rounded-full ring-1 ring-white aspect-square" src={userInfo.avatar} />
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