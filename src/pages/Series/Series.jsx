import React from 'react'

import Header from '../../components/Header/Header';
import MovieItem from '../../components/MovieItem/MovieItem';

import './Series.css';
const Series = ({movies, title}) => {
    const filteredMovies = movies?.filter((movie) => movie.programType === title && movie.releaseYear >= 2010);
    const sortedMovies = filteredMovies.sort((a, b) => a.title > b.title ? 1 : -1);
    return (
        <div id="series">
            <Header title="series"/>
            <div className="wrapper">
                {sortedMovies?.map((item, idx) => {
                    while(idx < 21 ){
                        return <MovieItem movie={item} key={idx}/>
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default Series
