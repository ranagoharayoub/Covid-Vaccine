import React from 'react'
import './VaccineNews.css'

function VaccineNews() {
    return (
        <div className='news-cont'>
             <div className='news-sect'>
                 <div className='news-slice'>
                     <div className='first-img'><img alt='img'></img></div>
                     <div className='headline'><h3>News-Bullet</h3></div>
                     <div className='second-img'><img alt='img'></img></div>
                 </div>
                 <div className='btn'>
                    <button className='recent-btn'>RECENT NEWS</button>
                    <button className='older-btn'>OLDER NEWS</button>
                 </div>
             </div>
        </div>
    )
}

export default VaccineNews
