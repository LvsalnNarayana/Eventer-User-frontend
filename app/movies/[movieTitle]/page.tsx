import React from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
const formatRuntime = (minutes: any) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let formattedRuntime = '';
    if (hours > 0) {
        formattedRuntime += `${hours}h`;
    }
    if (remainingMinutes > 0) {
        formattedRuntime += ` ${remainingMinutes}min`;
    }

    return formattedRuntime;
};
const SingleMovie = async ({ params }: any) => {
    const { movieTitle } = params;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWMzYTQyOWE1NmFhYTU5OWM1NWI3NmQ0MzM4MzJhZSIsInN1YiI6IjY1MTk5MWMzOWQ1OTJjMDBlNWVmZTZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ojq1OxIgqpRsc9G9_3KK1nFSnkKPoeL1MXCfXQB7rwM'
        }
    };

    const raw_data_movie = await fetch(`https://api.themoviedb.org/3/movie/${movieTitle.split('-')[0]}?language=en-US`, options);
    const raw_data_credits = await fetch(`https://api.themoviedb.org/3/movie/${movieTitle.split('-')[0]}/credits?language=en-US`, options);
    const movie = await raw_data_movie.json();
    const { cast } = await raw_data_credits.json();
    return (
        <>
            <div
                className="w-full h-[520px] bg-cover relative bg-no-repeat bg-top bg-black "
                style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                }}
            >

                <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-60 z-10 backdrop-blur-sm'></div>
                <div className='container max-w-screen-xl mx-auto relative z-20 flex justify-start items-center h-full w-full'>
                    <div className='h-fit flex justify-center items-start'>
                        <Image
                            className='w-60'
                            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                            alt={movie?.title}
                            width={0} height={0} sizes="100vw" />
                        <div className='pl-10 flex flex-col justify-start items-start h-full text-white'>
                            <h3 className='font-bold text-5xl'>{movie?.title}</h3>
                            <p className='flex justify-start items-center my-5'>
                                <StarIcon className='text-yellow-500 !text-5xl' />
                                <span className='text-3xl font-semibold ml-3'>{movie?.vote_average.toFixed(1)}&nbsp;/&nbsp;10</span>
                                <span className='text-lg ml-3'>({movie?.vote_count} votes)</span>
                            </p>
                            <p className='my-3 flex justify-start items-center'>
                                {movie?.spoken_languages.map((language: any, index: number) => (
                                    <span key={language.english_name} className='text-md'>
                                        {language.english_name}
                                        {index !== movie?.spoken_languages.length - 1 && ','}
                                        &nbsp;
                                    </span>
                                ))}
                            </p>
                            <div className='my-3 flex justify-start items-center'>
                                <span className=' text-md'>{formatRuntime(movie?.runtime)}</span>
                                <span className=' text-3xl'>&nbsp;&#x2022;&nbsp;</span>
                                {movie?.genres.map((genre: any, index: number) => (
                                    <span key={index} className='text-white text-md'>
                                        {genre.name}
                                        {index !== movie?.genres.length - 1 && ','}
                                        &nbsp;
                                    </span>
                                ))}
                                <span className=' text-3xl'>&nbsp;&#x2022;&nbsp;</span>
                                <span className=' text-md'>{movie?.release_date.replaceAll('-', '/')}</span>
                            </div>
                            <button className='bg-secondary text-lg py-2 px-28 my-3 rounded-md'>Book Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container max-w-screen-xl mx-auto'>
                <h3 className='mt-8 font-semibold text-3xl'>Overview</h3>
                <p className='my-4 text-md'>{movie?.overview}</p>
                <div className='flex justify-between items-center mt-8'>
                    <h3 className='font-semibold text-3xl'>Cast</h3>
                    <p className='text-blue-500 font-lg hover:underline cursor-pointer underline-offset-2'>See All</p>
                </div>
                <div className='mt-8 grid grid-cols-5 gap-3'>
                    {cast?.slice(0, 5).map((credit: any) => {
                        return <div key={credit.credit_id} className='flex flex-col mb-5'>
                            <div className='overflow-hidden flex justify-center items-center'
                            // style={{
                            //     backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                            // }}
                            >
                                <Image
                                    className='w-40 rounded-md'
                                    src={`https://image.tmdb.org/t/p/original${credit?.profile_path}`}
                                    alt={movie?.title}
                                    width={0} height={0} sizes="100vw" />
                            </div>
                            <p className='my-2 font-semibold text-lg text-center'>{credit?.original_name}</p>
                            <p className='font-semibold text-md text-gray-600 text-center'>{credit?.character}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )

}

// {
//     "adult": false,
//     "gender": 2,
//     "id": 2249745,
//     "known_for_department": "Acting",
//     "name": "Archie Madekwe",
//     "original_name": "Archie Madekwe",
//     "popularity": 51.06,
//     "profile_path": "/tdTv1E3309yWTU9IdtdhZj1a1Zj.jpg",
//     "cast_id": 13,
//     "character": "Jann Mardenborough",
//     "credit_id": "63237645226c56007cd9f92e",
//     "order": 0
//   },

export default SingleMovie

// {
//     "adult": false,
//     "backdrop_path": "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
//     "belongs_to_collection": null,
//     "budget": 60000000,
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       }
//     ],
//     "homepage": "https://www.granturismo.movie",
//     "id": 980489,
//     "imdb_id": "tt4495098",
//     "original_language": "en",
//     "original_title": "Gran Turismo",
//     "overview": "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
//     "popularity": 1914.709,
//     "poster_path": "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
//     "production_companies": [
//       {
//         "id": 125281,
//         "logo_path": "/3hV8pyxzAJgEjiSYVv1WZ0ZYayp.png",
//         "name": "PlayStation Productions",
//         "origin_country": "US"
//       },
//       {
//         "id": 84792,
//         "logo_path": "/7Rfr3Zu6QnHpXW2VdSEzUminAQd.png",
//         "name": "2.0 Entertainment",
//         "origin_country": "US"
//       },
//       {
//         "id": 5,
//         "logo_path": "/wrweLpBqRYcAM7kCSaHDJRxKGOP.png",
//         "name": "Columbia Pictures",
//         "origin_country": "US"
//       }
//     ],
//     "production_countries": [
//       {
//         "iso_3166_1": "US",
//         "name": "United States of America"
//       }
//     ],
//     "release_date": "2023-08-09",
//     "revenue": 102000000,
//     "runtime": 135,
//     "spoken_languages": [
//       {
//         "english_name": "English",
//         "iso_639_1": "en",
//         "name": "English"
//       },
//       {
//         "english_name": "German",
//         "iso_639_1": "de",
//         "name": "Deutsch"
//       },
//       {
//         "english_name": "Japanese",
//         "iso_639_1": "ja",
//         "name": "日本語"
//       }
//     ],
//     "status": "Released",
//     "tagline": "From gamer to racer.",
//     "title": "Gran Turismo",
//     "video": false,
//     "vote_average": 8.039,
//     "vote_count": 639
//   }