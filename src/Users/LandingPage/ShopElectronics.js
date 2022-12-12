import React from 'react'
import Nos from "../LandingPage/Images/Nos.png"
import star from "../LandingPage/Images/star.svg"
import belt from "../LandingPage/Images/belt.svg"
import gucci from "../LandingPage/Images/gucci.svg"
import pc from "../LandingPage/Images/pc.svg"
import friday from "../LandingPage/Images/friday.svg"
import fruits from "../LandingPage/Images/fruits.svg"
import "../Styles/Se.css"
import GreatDesign from './GreatDesign'


const ShopElectronics = () => {
  return (
    <>
        <GreatDesign/>
        <div className='container mt-5'>
            <p className='text-muted malseag'>Shop electronics and gadgets</p>
            <div className='maloverf'>
                <div className='d-flex malfic justify-content-between mt-5'>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={belt} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={pc} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={Nos} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={pc} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={belt} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={Nos} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                    <div class="card malcar">
                        <img className="card-img-top malimm" src={Nos} alt="Card image"/>
                        <div className="card-img-overlay p-0 malnos">
                            <h4 className="card-title m-0 p-0">Name Of Store</h4>
                            <div className='d-flex justify-content-center '>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                                <img className='malst' src={star}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className='malanime' src={friday}/>
                    <img src={friday}/>
                </div>
                <div>
                    <img src={friday}/>
                    <img src={friday}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShopElectronics