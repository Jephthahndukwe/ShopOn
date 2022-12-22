import React from 'react'
import gchair from "../../Assets/Images/gchair.svg"
import black from "../../Assets/Images/black.jpg"
import red from "../../Assets/Images/red.png"
import mirror from "../../Assets/Images/mirror.svg"
import clock from "../../Assets/Images/clock.svg"
import cabinet from "../../Assets/Images/cabinet.svg"
import bed from "../../Assets/Images/bed.svg"
import line from "../../Assets/Images/Line.svg"
import lin from "../../Assets/Images/Lin.svg"
import "../../Styles/User/Narrival.css"


const NewArrival = () => {
  return (
      <>  
        <div className='container pb-5'>
            <p className='malppp'>New Arrival</p>
            <div className='d-flex container justify-content-between malgtlt'>
                <button className='malline'><img src={line}/></button>
                <button className='mallin'><img src={lin}/></button>
            </div>
            <div class="row malrow">
                <div class="col malgrid">
                    <img src={gchair} className="malgchair"/>
                    <hr className='malhrr'></hr>
                    <div className='color'>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                    </div>
                    <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                    <p className='text-dark maldoll'>$45.98</p>
                    <a className='malcart'>Add to Cart</a>
                </div>
                <div class="col malgrid">
                    <img src={mirror} className="malgchair"/>
                    <hr></hr>
                    <div className='color'>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                    </div>
                    <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                    <p className='text-dark maldoll'>$45.98</p>
                    <a className='malcart'>Add to Cart</a>
                </div>
                <div class="col malgrid">
                    <img src={cabinet} className="malgchair"/>
                    <hr></hr>
                    <div className='color'>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                    </div>
                    <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                    <p className='text-dark maldoll'>$45.98</p>
                    <a className='malcart'>Add to Cart</a>
                </div>
                <div class="col malgrid">
                    <img src={clock} className="malgchair"/>
                    <hr></hr>
                    <div className='color'>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                    </div>
                    <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                    <p className='text-dark maldoll'>$45.98</p>
                    <a className='malcart'>Add to Cart</a>
                </div>
                <div class="col malgrid">
                    <img src={bed} className="malgchair"/>
                    <hr></hr>
                    <div className='color'>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                        <img src={red}/>
                        <img src={black}/>
                    </div>
                    <p className='text-muted malwrop'>Bucklo Wrop Wooden Table</p>
                    <p className='text-dark maldoll'>$45.98</p>
                    <a className='malcart'>Add to Cart</a>
                </div>
            </div> 
        </div>
    </>
  )
}

export default NewArrival