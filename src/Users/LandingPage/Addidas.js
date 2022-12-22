import React from 'react'
import dataAddidas from '../LandingPage/addidas.json'
import '../../Styles/User/Addidas.css'
import dataluisvitton from '../LandingPage/luisvitton.json'
import '../../Styles/User/LuisVitton.css'
import dataoraimo from '../LandingPage/oraimo.json'
import '../../Styles/User/Oraimo.css'
import Furniture from '../LandingPage/Furniture'

const Addidas = () => {
  return (
    <>
      <div className='davidContainer2'>
        <div className='addidas'>Addidas</div>
        <div className='davidcard2'>
          {dataAddidas.map((el) =>(
            <div key={el.id}>
              <div className='davidimg2'>
                <img className='davidimage2' src={el.image} />
              </div>
              <div className='davidcard3'>
              <div className='daviddescription2'>{el.description}</div>
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <div className='davidcontainer3'>
        <div className='luisVitton'>Luis Vitton</div>
        <div className='davidcard4'>
          {dataluisvitton.map((el) =>(
            <div key={el.id}>
              <div className='davidimg3'>
                <img className='davidimage3' src={el.pics} />
              </div>
              <div className='davidcard5'>
                <div className='davidtitle'>{el.title}</div>
              </div>
            </div>
          ))
          }
        </div>
      </div>


      <div className='davidContainer4'>
        <div className='oraimo'>Oraimo</div>
        <div className='davidcard6'>
          {dataoraimo.map((el) =>(
            <div key={el.id}>
              <div>
                <img className='oraimoimg' src={el.oraimoimg} />
              </div>
              <div className='davidcard7'>
                <div className='davidoraimoname'>{el.oraimoname}</div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <Furniture/>
    </>
  )
}

export default Addidas
