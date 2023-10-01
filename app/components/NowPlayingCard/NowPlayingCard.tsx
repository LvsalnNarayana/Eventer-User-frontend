import React from 'react'
import HomeCard from '../HomeCard/HomeCard';
const NowPlayingCard = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWMzYTQyOWE1NmFhYTU5OWM1NWI3NmQ0MzM4MzJhZSIsInN1YiI6IjY1MTk5MWMzOWQ1OTJjMDBlNWVmZTZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ojq1OxIgqpRsc9G9_3KK1nFSnkKPoeL1MXCfXQB7rwM'
        }
    };

    const nowPlaying = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const { results } = await nowPlaying.json();
    return (

        <>
            {results?.slice(0,5)?.map((result: any) => {
                return <HomeCard key={result.id} data={result} />
            })}
        </>
    )
}

export default NowPlayingCard

// {
//     "adult": false,
//         "backdrop_path": "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
//             "genre_ids": [
//                 28,
//                 878,
//                 12
//             ],
//                 "id": 565770,
//                     "original_language": "en",
//                         "original_title": "Blue Beetle",
//                             "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
//                                 "popularity": 2994.357,
//                                     "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
//                                         "release_date": "2023-08-16",
//                                             "title": "Blue Beetle",
//                                                 "video": false,
//                                                     "vote_average": 7.1,
//                                                         "vote_count": 1019
// },