import React from 'react'
import '../../Styles/User/TopCategories.css'
import Addidas from '../LandingPage/Addidas'
import dataTop from '../LandingPage/topcategories.json'

const TopCategories = () => {
  return (
    <>
      <div className='davidcontainer'>
        <div className='davidtopCategories'>TopCategories</div>
        <div className='davidcard'>
          {dataTop.map((el) =>(
            <div key={el.id}>
              <div className='davidcardImage'>
                <img src={el.image} />
              </div>
              <div className='davidname'>{el.name}</div>
            </div>
          ))
          }
        </div>
      </div>
      <Addidas/>
    </>
  )
}

export default TopCategories
