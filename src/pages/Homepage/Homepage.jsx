import React from 'react'
import Header from '../../components/Header/Header';
import HomeNavItem from '../../components/HomeNavItem/HomeNavItem'

import './Homepage.css'
const Homepage = ({title, loading, error}) =>  {
    return (
        <div>
            <Header title={title}/>
            <div className="wrapper">
                {loading ? <p>Loading</p> : <></>}
                {error ? <p>Ooops, something went wrong</p> : <></>}
                <HomeNavItem title="series" />
                <HomeNavItem title="movies" />
            </div>
        </div>
    )
}

export default Homepage
