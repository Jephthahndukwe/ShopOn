import React from 'react'
import img1 from '../../Assets/Images/istockphoto.png'
import img2 from '../../Assets/Images/Ellipse47.png'
import chair from '../../Assets/Images/chair.png'
import laptop from '../../Assets/Images/laptop.png'
import food from '../../Assets/Images/food.png'
import weather from '../../Assets/Images/weather.png'
import special from '../../Assets/Images/special.png'
import '../../Styles/User/Dami.css'

const SecondSection = () => {
  return (
    <>
    <section>
      <div className="container dami-space">
        <div className="row">
          <div className="col-md-4 text-center mans">
               <img classname='mans'src={img1}/>
          </div>
          <div className="col-md-4 text-center dami-wrap">
            <div className='opo'>
               <p><small> QUALITY PRODUCTS</small></p> 

                <p className='text-white dami-new'>New generation</p>
                <p className='text-white dami-new'>E-commerce platform</p>
                <p className='text-white dami-new'>connecting seller to buyer</p>

                <p><small>The right platform to buy or sell from the comfort <br /> of your home. Verified products only. </small></p>

                <button className='dami-shop px-5 py-2'> shop now</button>
          </div>
          </div>
          <div className="col-md-4 text-center ">
          <p className="text-warning">2nd image</p>
          </div>
        </div>
      </div>
    </section>


    <section className='my-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-4  man">
            <div className='special'> 
            <img classname='offer'src={special}/>
              <h4 className='furn'>on<span className='furni'>Furniture</span></h4>
            </div>
            <h5 className='fun'>import furniture sold by the best vendors <br/>
             known globally for quality</h5>
            <div className='chair'>
            <p className="text-warning chair"><img src={chair}/></p>
            </div>
            <button className='dami-now px-5 py-2'>shop now</button>
          </div>

  <div className="col-md-8 ">
          <div className="row">
             <div className="col-md-6 men"><img src={laptop}/></div>
             <div className="col-md-6 men"><img src={food}/></div>
          </div>
    <div className='min my-3'>
        <div className='row'>
        <div className="col-md-4">
        <p className='myr'>Myriam's garden wall Art</p>
        <p className='after'>$42.13 <span className='before'>$42.33</span></p>
        <button className='dami-b px-5 py-2'> shop now</button>
  </div>
              {/* <div className='col-md-2'></div> */}
              <div className='col-md-8'><img src={weather}/></div>
        </div>
    </div>
  </div>

        </div>
      </div>
    </section>
    
    </>
  )
}

export default SecondSection