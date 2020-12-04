import React from 'react'

import Header from '../../components/Header/Header';
import MovieItem from '../../components/MovieItem/MovieItem';

import './Movies.css';
function Movies({movies, title}) {
    const filteredMovies = movies?.filter((movie) => movie.programType === "movie" && movie.releaseYear >= 2010);
    const sortedMovies = filteredMovies.sort((a, b) => a.title > b.title ? 1 : -1);
    return (
        <div id="movies">
            <Header title="movies"/>
            <div className="wrapper">
                {sortedMovies?.map((item, idx) => {
                    while(idx < 21 && item.releaseYear >= 2010 ){
                        return <MovieItem movie={item} key={idx}/>
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default Movies
