import React from 'react'
import './VaccinePortal.css'

function VaccinePortal() {
    return (
        <div className='portal-cont'>
             <div className='cards'>
                <p className='company-name'>BIONTECH/ PFIZER</p>
                <p className='cat'>Category: <p style={{color:'#F88B5A', marginLeft:'10px'}}>RNA Based Vaccine</p></p>
                <p className='discription'>Description: <p style={{color:'#F88B5A', marginLeft:'5px'}}>3 LNP-mRNAs; BNT162</p></p>
             </div>
        </div>
    )
}

export default VaccinePortal
