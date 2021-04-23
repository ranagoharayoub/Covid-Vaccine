import React from 'react'
import { useStateValue } from '../ContextAPI/ContextApi'
import './VaccinePortal.css'

function VaccinePortal() {
    const[{ApprovedVaccine, LoadingS}]=useStateValue()
    console.log(ApprovedVaccine,LoadingS)
    return (
        <div className='portal-cont'>
            <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr '}}>
            {
                ApprovedVaccine.map((data, index) => 
                <div key={index} className='cards'>
                    <p className='company-name'>{data.developerResearcher}</p>
                    <div className='cat'>Category: <p style={{color:'#F88B5A', marginLeft:'10px'}}>{data.category}</p></div>
                    <div className='discription'>Description: <p style={{color:'#F88B5A', marginLeft:'5px'}}>{data.description}</p></div>
                </div>
                )
            }
            </div>
        </div>
    )
}

export default VaccinePortal
