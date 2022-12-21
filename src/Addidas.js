import React from 'react'
import data from "./addidas.json"
import "./Addidas.css"
import dataluisvitton from './luisvitton.json'
import './LuisVitton.css'
import dataoraimo from './oraimo.json'
import './oraimo.css'
import Furniture from './Furniture'

const Addidas = () => {
  return (
    <>
      <div className='davidContainer2'>
        <div className='addidas'>Addidas</div>
        <div className='davidcard2'>
          {data.map((el) =>(
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
