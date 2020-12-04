import React from 'react'
import { useHistory} from 'react-router-dom';


import './HomeNavItem.css';
const HomeNavItem = ({title}) => {
    const history = useHistory();

    const handleClick = (title) => history.push(`/${title.toLowerCase()}`)
    return (
        <div onClick={() => handleClick(title)} className="nav-item">
           <div className="overlay">
                <h2>{title}</h2>
                <img src="https://github.com/StreamCo/react-coding-challenge/blob/master/assets/placeholder.png?raw=true" alt="Placeholder"/>
           </div>
            <p>Popular {title}</p>
        </div>
    )
}

export default HomeNavItem
