import React from 'react'
import "./TopCategories.css"
import Addidas from "./Addidas"
import data from "./topcategories.json"

const TopCategories = () => {
  return (
    <>
      <div className='davidcontainer'>
        <div className='davidtopCategories'>TopCategories</div>
        <div className='davidcard'>
          {data.map((el) =>(
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
