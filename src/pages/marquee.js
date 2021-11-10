import React from 'react'
import {useHistory} from "react-router-dom"

function MarqueeComponent() {
    const history = useHistory()
    const marqueeHandler = () => {
        history.push("/busdetail")
    }
    return (
        <>
        <div className="pt-3">
        <marquee width="100%" direction="right" height="1%" style={{color:'black', cursor:'pointer'}} onClick={marqueeHandler}>
        Book Bus Tickets 	&#11088;
      
   </marquee>
        </div>
        </>
    )
}

export default MarqueeComponent
