import React from 'react'
import './Download.scss'
import playstore from '../../assets/images/playstore.png'
import appstore from '../../assets/images/appstore.png'
// import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="download">
        <div className='download-main'>
            <a href="https://play.google.com/store/apps/details?id=com.eatplek1.eatplek1"><img className='download-img' src={playstore} alt="" /></a>
            <a href="https://apps.apple.com/in/app/eatplek/id1667091983"><img className='download-img' src={appstore} alt="" /></a>
        </div>
    </div>
  )
}

export default Download