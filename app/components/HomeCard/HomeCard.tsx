import React, { Suspense } from 'react';
import Image from 'next/image';
import Loading from './loading';
import Link from 'next/link';

const HomeCard = ({ data }: any) => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Link href={`/movies/${data?.id}-${data?.title.replace(/ /g, '-')}`}>
                    {data?.poster_path !== '' ? <Image
                        className='w-full rounded-sm'
                        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                        alt={data?.title}
                        width={0} height={0} sizes="100vw" /> : <div className='h-full bg-gray-100 rounded-sm flex justify-center items-center text-5xl font-bold text-gray-500'>?</div>}
                    <h2 className='font-semibold text-lg my-2'>{data?.title}</h2>
                    <p className='my-2 font-md'>{data?.vote_average}&nbsp;<span className='font-sm'>{data?.vote_count}</span></p>
                </Link>
            </Suspense>
        </>
    )
}

export default HomeCard

// {
//     "adult": false,
//     "backdrop_path": "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
//     "genre_ids": [
//       28,
//       878,
//       12
//     ],
//     "id": 565770,
//     "original_language": "en",
//     "original_title": "Blue Beetle",
//     "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
//     "popularity": 2994.357,
//     "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
//     "release_date": "2023-08-16",
//     "title": "Blue Beetle",
//     "video": false,
//     "vote_average": 7.1,
//     "vote_count": 1019
//   },