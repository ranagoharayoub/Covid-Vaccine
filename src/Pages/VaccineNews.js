import React from 'react'
import { useStateValue } from '../ContextAPI/ContextApi'
import './VaccineNews.css'

function VaccineNews() {
   const[{VaccineNews}] = useStateValue()
   console.log(VaccineNews)
    return (
        <div className='news-cont'>
             <div className='news-sect'>
                 {
                     VaccineNews.map((data, index) => 
                     <div key={index} className='news-slice'>
                        <div className='first-img'><img alt='img'></img></div>
                        <div className='headline'><h3>{data.title}</h3></div>
                        <div className='second-img'><img alt='img'></img></div>
                    </div>
                 )
                 }
                 {/* <div className='news-slice'>
                     <div className='first-img'><img alt='img'></img></div>
                     <div className='headline'><h3>News-Bullet</h3></div>
                     <div className='second-img'><img alt='img'></img></div>
                 </div> */}
                 {/* <div className='btn'>
                    <button className='recent-btn'>RECENT NEWS</button>
                    <button className='older-btn'>OLDER NEWS</button>
                 </div> */}
             </div>
        </div>
    )
}

export default VaccineNews
