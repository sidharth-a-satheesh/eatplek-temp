import React from 'react'
import './home.scss'
import svg from '../../assets/images/042e60.svg'

const Home = () => {
  return (
    <div className='home-main'>
        <div className="home-img">
            <img className="home-img-main" src={svg} alt="" />
        </div>
    </div>
  )
}

export default Home