import React from 'react'
import './Navbar.css'
import { Link} from "react-router-dom";
function Navbar() {
    return (
        <div className='nav-cont'>
            <Link to='/'><p className='title'>FORESEEN VACCINE</p> <div className='logo'></div></Link>
            <Link to='/vaccine-portal'><p className='nav-appr'>Approved Vaccine</p><div className='vaccine-check'></div> </Link>
            <Link to='/news'><p className='nav-news'>News</p> <div className='news-icon'></div> </Link>
        </div>
    )
}

export default Navbar
