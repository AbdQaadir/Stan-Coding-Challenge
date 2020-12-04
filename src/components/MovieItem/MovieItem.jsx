import React from 'react'

import "./MovieItem.css"
const MovieItem = ({movie}) => {
    return (
        <div className="movie-item">
            <img src={movie.images["Poster Art"].url} alt=""/>
            <p className="title">{movie.title }</p>
        </div>
    )
}

export default MovieItem
