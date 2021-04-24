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
                     <a href={data.link} key={index} className='news-slice'>
                        <div className='first-img'><img alt='img'></img></div>
                        <div className='headline'>
                            <h3 style={{borderBottom: '1px solid lightgrey', margin: '2px 2px'}}>{data.title}</h3>
                            <p style={{margin:'2px 2px'}}>{data.content}</p>
                            </div>
                        <div className='second-img'><img alt='img'></img></div>
                    </a>
                 )
                 }
                 {/* <div className='btn'>
                    <button className='recent-btn'>RECENT NEWS</button>
                    <button className='older-btn'>OLDER NEWS</button>
                 </div> */}
             </div>
        </div>
    )
}

export default VaccineNews
