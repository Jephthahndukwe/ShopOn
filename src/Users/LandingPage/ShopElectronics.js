import React from 'react'
import Nos from "../../Assets/Images/Nos.png"
import star from "../../Assets/Images/star.svg"
import belt from "../../Assets/Images/belt.svg"
import gucci from "../../Assets/Images/gucci.svg"
import pc from "../../Assets/Images/pc.svg"
import friday from "../../Assets/Images/friday.svg"
import fruits from "../../Assets/Images/fruits.svg"
import "../../Styles/User/Se.css"
import GreatDesign from './GreatDesign'


const ShopElectronics = () => {
  return (
    <>
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