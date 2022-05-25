import Link from 'next/link'

const Header = () => {
	return (
		<header className="font-sans-hack flex py-4 px-6 sm:px-10 lg:px-20 text-white header bg-dark">
			<div className='container flex items-center justify-between mx-auto '>
				<h1 className='text-lg font-medium'>
					<Link href="/">
						<div className='flex items-center cursor-pointer'>
							<img src='/logo.png' className='w-10 mr-4' />Black IDE Hub
						</div>
					</Link>
				</h1>
				<nav>
					<ul className='text-sm'>
						<li><button className='px-4 py-1 duration-300 rounded-md bg-primary hover:scale-105'><Link href='https://ide.black'>Open Black IDE</Link></button></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;