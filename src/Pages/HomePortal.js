import React, { useState } from 'react'
import { useStateValue } from '../ContextAPI/ContextApi'
import './HomePortal.css'

function HomePortal() {

// const [state, setstate] = useState(false)
    let avaccinated = 0
    let cvaccinated = 0
    const [{canadianApi, LoadingF}] = useStateValue()
    console.log(canadianApi)
   if (LoadingF===false) {
       avaccinated = canadianApi[0].cumulative_avaccine
       cvaccinated = canadianApi[0].cumulative_cvaccine
   } 
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
            <div className='orange-box'><p className='orange-p'>{avaccinated}</p></div>
            <p className='vda'>Vaccine Doses Administered</p>
            <div className='blue-box'><p className='blue-p'>{cvaccinated}</p></div>
            <p className='pfv'>People Fully Vaccinated</p>
        </div>
    )
}

export default HomePortal
