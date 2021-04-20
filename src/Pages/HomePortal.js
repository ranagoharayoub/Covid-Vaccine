import React from 'react'
import './HomePortal.css'

function HomePortal() {
    return (
        <div className='home-cont'>
            {/* <img src='/Vaccine_icon.png' alt='img' className='injection'></img> */}
            <div className='injection'></div>
            <p className='about'>Foreseen Vaccine is a a one stop COVID-19 vaccine dashboard 
                <br></br>
                    Stay informed with the latest vaccine related news and learn about
                <br></br>
                    all current FDA approved vaccines.
            </p>
            <div className='orange-box'><p className='orange-p'>9.97m</p></div>
            <p className='vda'>Vaccine Doses Administered</p>
            <div className='blue-box'><p className='blue-p'>921k</p></div>
            <p className='pfv'>People Fully Vaccinated</p>
        </div>
    )
}

export default HomePortal
