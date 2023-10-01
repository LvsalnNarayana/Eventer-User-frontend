import React from 'react'
import Link from 'next/link';
import NowPlayingCard from '../components/NowPlayingCard/NowPlayingCard';
export interface Event {
    id: string,
    name: string,
    location: string,
    poster: string,
    capacity: Number,
    date: Date

}
const Home = async () => {

    return (
        <>
            <div className='w-full h-96 bg-secondary bg-opacity-50 mb-10'></div>
            <div className='container max-w-screen-xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <h3 className='my-3 font-semibold text-2xl'>Now Playing</h3>
                    <Link href='/now-playing' className='text-blue-500 font-lg hover:underline cursor-pointer underline-offset-2'>See All</Link>
                    </div>
                <div className='py-5 grid grid-cols-5 gap-5 gap-y-20'>
                    <NowPlayingCard />
                </div>
            </div>
        </>
    )
}

export default Home