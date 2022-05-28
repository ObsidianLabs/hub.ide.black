import type { NextPage } from 'next'
import ProjectCard from '../src/components/ProjectCard'
import dayjs from 'dayjs'
import { NextSeo } from 'next-seo'
import React from 'react'

const Home: NextPage = () => {
  const [loadStatus, setLoadStatus] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  const [pageIndex, setPageIndex] = React.useState(1)
  const [projectList, setProjectList] = React.useState([])
  const pageSize = 15

  function loadMore() {
    setLoadStatus(!loadStatus)
    setLoading(!loading)
    setPageIndex(pageIndex + 1)
  }

  async function getProjectList () {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/eth/project?pageIndex=${pageIndex}&pageSize=${pageSize}`)
    const data = await res.json()
    
    if (data.length == pageSize) setLoadStatus(!loadStatus)
    if (pageIndex > 1) setLoading(!loading)
    setProjectList((projectList.concat(data)))
  }

  React.useEffect(() => {
    getProjectList()
  },[pageIndex])
  
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
      <div className="font-sans-hack">
        <div className='container m-auto my-24 text-center cursor-default'>
          <h1 className='text-2xl font-medium'>Discover intresting smart contract projects shared by <a href='https://ide.black' className='text-primary hover:underline'>Black IDE</a>.</h1>
        </div>
        <main className="container w-full max-w-6xl px-12 pb-10 mx-auto md:px-24">
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {
              projectList.map(({ _id, name: projectName, user, createdAt }: any) => {
                return <div key={_id}><ProjectCard projectName={projectName} userInfo={user[0]} createTime={dayjs(createdAt).format('YYYY MM-DD')} /></div>
              })
            }
          </div>
          <div className='py-5 text-center'>
            <button hidden={loadStatus} onClick={loadMore} className="px-4 py-1 mr-4 bg-gray-600 rounded-md">Load More</button>
            <div hidden={loading}>
              <div className='flex justify-center text-lg'>
                <div className="w-6 h-6 mr-2 border-4 border-blue-400 border-dotted rounded-full animate-spin" />
                Loading...
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}



export default Home