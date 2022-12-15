import React from 'react'
import './Styling/Hot_sale.css'
// import { Link } from 'react-router-dom'
import main from "./Images/assets/Main.png"
import first from "./Images/assets/1.png"
import secound from "./Images/assets/2.png"
import third from "./Images/assets/3.png"
import forth from "./Images/assets/4.png"
import fifth from "./Images/assets/5.png"
import sixth from "./Images/assets/6.png"
import seventh from "./Images/assets/7.png"
import last from "./Images/assets/8.png"
import polygon from "./Images/assets/Polygon 7.png"
import black from "./Images/assets/black.png"
import kid1 from "./Images/assets/kid1.png"
import kid2 from "./Images/assets/kid2.png"
import kid3 from "./Images/assets/kid3.png"
import kid4 from "./Images/assets/kid4.png"
import kid5 from "./Images/assets/kid5.png"
import kid6 from "./Images/assets/kid6.png"
import kid7 from "./Images/assets/kid7.png"
import kid8 from "./Images/assets/kid8.png"
import table1 from "./Images/assets/table1.png"
import table2 from "./Images/assets/table2.png"
import lamb1 from "./Images/assets/lamb1.png"
import lamb2 from "./Images/assets/lamb2.png"
import {VscCircleLargeFilled} from 'react-icons/vsc'
import {ImFire} from 'react-icons/im'
// import {IoMdFlash} from 'react-icons/io'



const Hot_Sale = () => {
  return (
    <>
        <div className='container'>
            <h2 className='Tony-heading'>Hot Sales</h2>
            <div className='row'>
                <div className='tony col-md-3'>
                    <div className='flash-sales'>
                        <div>Flash Sale</div>
                            <div className='img-fluid'>
                                <h5 className='lyon'>-50%</h5>
                                <img src={main} alt='main'/>
                            </div>
                        <div className='days'>
                            <h4 className='tony-num'>06 : 12 : 50 : 48</h4>
                            <h4 className='tony-days'>Day : Hrs : Min : Sec</h4>
                        </div>
                        <div className='colors'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                        </div>
                        <div className='Tmain'>
                            Bucklo Wrop Wooden Table
                            <p className='tony-price'>$56.12<span className='discount'>$105.74</span></p>
                        </div>
                        <div className='tony-fire'>
                            <ImFire/>
                        </div>
                        <p className='lastitem'>Already Sold</p>
                    </div>
                    <div className='blackfriday'>
                        <img src={black}/>
                    </div>
                </div>

                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={first}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={secound}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={third}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 <span className='discount'>$50.74</span></div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={forth}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={fifth}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 <span className='discount'>$50.74</span></div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={sixth}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36</div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={seventh}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 </div>
                            <div className='link'>Add to Cart</div>
                        </div>
                        <div className='col-md-3'>
                            <img src={last}/>

                            <div className='select'>
                            <VscCircleLargeFilled className='black'/>
                            <VscCircleLargeFilled className='red'/>
                            <VscCircleLargeFilled className='yellow'/>
                            <VscCircleLargeFilled className='grey'/>
                            <VscCircleLargeFilled className='green'/>
                            </div>

                            <div className='text'>Bucklo Wrop Wooden Table</div>
                            <div className='price'>$69.36 <span className='discount'>$50.74</span></div>
                            <div className='link'>Add to Cart</div>
                        </div>
                    </div> 
                </div>
                <div className='gon'>
                    {/* <img src={polygon}/> */}
                </div>
            </div>
            <div>
                <div className='SubH'>Top categories for you</div>
                <div className='tony-row row'>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid1} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid2} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid3} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid4} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid5} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid2} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid7} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid8} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid1} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid6} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid1} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={kid3} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>   
                </div> 
            </div>
            <div className='row'>
                <div className='tony-chair col-md-6'>
                    <img src={table1} className="tony-chair1 img-fluid" />
                    <h6 className='tony-collection'>2020’s NEW COLLECTION</h6>
                    <h3 className='tony-comfort'>Comfortable Chair</h3>
                    <button className='Tony-explore'>Explore Now</button>
                    <img src={table2} className="tony-chair2 img-fluid" />
                </div>
                <div className='tony-lamb col-md-6'>
                    <img src={lamb1} className="tony-lamb1 img-fluid" />
                    <h6 className='tony-collection'>2020’s NEW COLLECTION</h6>
                    <h3 className='tony-comfort'>Vega Table Lamp</h3>
                    <button className='Tony-explore'>Explore Now</button>
                    <img src={lamb2} className="tony-lamp2 img-fluid" />
                </div>
            </div>   
        </div>
    </>
  )
}

export default Hot_Sale