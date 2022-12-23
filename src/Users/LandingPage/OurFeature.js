import React from 'react'
import '../../Styles/User/OurFeature.css'
import data from '../LandingPage/OurFeature.json'
import {VscCircleLargeFilled} from 'react-icons/vsc'
import img1 from '../../Assets/Images/Vector.png'
import img2 from '../../Assets/Images/carton.png'
import img3 from '../../Assets/Images/shoppinghandle.png'
import img4 from '../../Assets/Images/shopping.png'
import img5 from '../../Assets/Images/boys.png'
import img6 from '../../Assets/Images/phones.png'
import img7 from '../../Assets/Images/plate.png'
import img8 from '../../Assets/Images/girl.png'
import img9 from '../../Assets/Images/purpleroom.png'
import img10 from '../../Assets/Images/whiteroom.png'
import img11 from '../../Assets/Images/laptopcup.png'
import img12 from '../../Assets/Images/phonesss.png'
import img13 from '../../Assets/Images/background.png'
import img14 from "../../Assets/Images/mark.png"
import img15 from "../../Assets/Images/adidas.png"
import img16 from "../../Assets/Images/fruits.png"
import img17 from "../../Assets/Images/gucci.png"
import img18 from "../../Assets/Images/louisbelt.png"


const OurFeature = () => {
  return (
    <>
    <div className='feature-container'>
        <div className='feature-wrapper'>
            <div className='heading'>Our Feature Product</div>
            <div className='items'>
                <ul>
                    <li><a href=''>All</a></li>
                    <li><a href=''>Electronics</a></li>
                    <li><a href=''>Kitchen</a></li>
                    <li><a href=''>Phones</a></li>
                    <li><a href=''>Kids</a></li>
                    <li><a href=''>Fashions</a></li>
                </ul>
            </div>
                <div className='card-container'>
                    {data
                        .map((el) =>(
                            <div className='card card-feature' key={el.id}>
                                <div className='cardHold'>
                                <div className='card-images'>
                                    <img src={el.image}/>
                                </div>
                                <div className='card-info'>
                                <div className='colours'>
                                    <VscCircleLargeFilled className='red'/>
                                    <VscCircleLargeFilled className='blue'/>
                                    <VscCircleLargeFilled className='yellow'/>
                                    <VscCircleLargeFilled className='green'/>
                                    <VscCircleLargeFilled className='grey'/>
                                </div>
                                <div className='card-text'>{el.name}</div>
                                <div className='card-price'>{el.price}</div>
                                <a href='' className='cart'>Add to cart</a> 
                                </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            <div className='steph-sale-container bg-dark m-5'>
                <div className='sales-row pt-5'>
                    <div className='sale'>
                        <p className='Para1'>Up to <span className='span1'>40%</span>off</p>
                        <p className='span2'>SALE</p>
                    </div>
                    <div className='shipping'>
                        <img src={img1}/>
                        <p className='text-white textwhite'>Fast & Free shipping</p>
                    </div>
                    <div className='return'>
                        <img src={img2}/>
                        <p className='text-white textwhite'>30-days Free Return</p>
                    </div>
                    <div className='secure'>
                        <img src={img3} className='handle'/>
                        <img src={img4} className='baghandle'/>
                        <p className='text-white textwhite'>100% secure shopping</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='topCat'>Top categories for you</div>
                <div className='tony-row row'>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img5} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img6} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img7} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img8} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img9} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img10} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img11} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img12} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img5} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img6} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img7} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>
                    <div className='tony-kids col-md-2'>    
                        <div className='kid text-center'>
                            <img src={img8} className="img-fluid" />
                            <p>for Kids</p>
                        </div>    
                    </div>   
                </div> 
            </div>
            
            <div className='popular-categories ' style={{backgroundImage: `url(${img13})`}}>
            <div className='popular-heading pt-4'><h2>Popular Categories</h2></div>
                <div className='steph-popular'>
                      <div className='steph-room'>
                        <h6>Living room</h6>
                        <ul>
                            <li><a href=''>Accessories</a></li>
                            <li><a href=''>Cabinets</a></li>
                            <li><a href=''>Armchairs</a></li>
                            <li><a href=''>Bookcases</a></li>
                            <li><a href=''>Curtains</a></li>
                            <li><a href=''>Coffee Table</a></li>
                        </ul>
                    </div>
                    <div className='Kitchen'>
                    <h6>Kitchen & Dining</h6>
                        <ul>
                            <li><a href=''>Appliances</a></li>
                            <li><a href=''>Cabinets</a></li>
                            <li><a href=''>Chairs</a></li>
                            <li><a href=''>Cookwares</a></li>
                            <li><a href=''>Curtains</a></li>
                            <li><a href=''>Dining Table</a></li>
                        </ul>
                    </div>
                    <div className='Bedroom'>
                    <h6>Bedroom</h6>
                        <ul>
                            <li><a href=''>Beds</a></li>
                            <li><a href=''>Curtains</a></li>
                            <li><a href=''>Sheets</a></li>
                            <li><a href=''>Lighting</a></li>
                            <li><a href=''>Mattresses</a></li>
                            <li><a href=''>Mirror</a></li>
                        </ul>
                    </div>
                    <div className='Bathroom'>
                    <h6> Bathroom</h6>
                        <ul>
                            <li><a href=''>Accessories</a></li>
                            <li><a href=''>Cabinets</a></li>
                            <li><a href=''>Lighting</a></li>
                            <li><a href=''>Mirrors</a></li>
                            <li><a href=''>Showers</a></li>
                            <li><a href=''>Sink</a></li>
                        </ul>
                    </div>
                    <div className='workspace'>
                    <h6>Workspace</h6>
                        <ul>
                            <li><a href=''>Bookcases</a></li>
                            <li><a href=''>Chairs</a></li>
                            <li><a href=''>Lighting</a></li>
                            <li><a href=''>Desks</a></li>
                            <li><a href=''>Drawers</a></li>
                            <li><a href=''>Organisers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
           <div className='featured-heading'><h2>Top featured stores for you</h2></div>
                 <div className=' featured-container'>
                    <div className='featured-row'>
                        <div className='card featured-card'>
                            <div>
                                <img src={img14} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img15} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img12} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img16} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img17} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        
                    </div>
                 </div>
                 <div className='featured-heading'><h2>Shop fashion</h2></div>
                 <div className=' featured-container'>
                    <div className='featured-row'>
                        <div className='card featured-card'>
                            <div>
                                <img src={img17} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img12} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img18} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img9} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        <div className='card featured-card'>
                            <div>
                                <img src={img16} className='card-image'/>
                            </div>
                            <div className='storeName'>
                                <h2 className='featured-name'>Name of store</h2>
                            </div>
                        </div>
                        
                    </div>
                 </div>
                   
        </div>
    </div>
    </>
  )
}

export default OurFeature