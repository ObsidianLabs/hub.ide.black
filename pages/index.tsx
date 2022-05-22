import type { NextPage } from 'next'
import ProjectCard from '../src/components/ProjectCard'
import dayjs from 'dayjs'
import { NextSeo } from 'next-seo'

const Home: NextPage = ({ projectList }: any) => {
  return (
    <>
      <NextSeo
        title="Hub For Black IDE: Cloud-based Graphic EVM Solidity IDE"
        description="Discover intresting smart contract projects shared by Black IDE."
        openGraph={{
          url: 'https://hub.ide.black',
          title: 'Hub For Black IDE: Cloud-based Graphic EVM Solidity IDE',
          description: 'Discover intresting smart contract projects shared by Black IDE.',
          images: [
            {
              url: 'https://raw.githubusercontent.com/iNorthIsle/og-image-service/main/public/og_image.png',
              width: 800,
              height: 460,
              alt: 'Black IDE',
              type: 'image/jpeg',
            }
          ],
          site_name: 'Black IDE Hub',
        }}
        twitter={{
          handle: '@obsidian_labs',
          site: '@obsidian_labs',
          cardType: 'summary_large_image',
        }}
      />
      <div className="">
        <div className='container m-auto my-24 text-center'>
          <h1 className='text-4xl'>Discover intresting smart contract projects shared by <a href='https://ide.black' className='font-bold text-primary hover:underline'>Black IDE</a>.</h1>
        </div>
        <main className="container grid w-full max-w-6xl grid-cols-3 gap-8 px-24 mx-auto">
          {
            projectList.map(({ _id, name: projectName, user, createdAt }: any) => {
              return <div key={_id}><ProjectCard projectName={projectName} userInfo={user[0]} createTime={dayjs(createdAt).format('YYYY MM-DD')} /></div>
            })
          }
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query }: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/eth/project`)
  const data = await res.json()

  return {
    props: {
      projectList: data
    },
  }
};


export default Home
