import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/Images/SHOPON.png'
import '../../Styles/User/Dami.css'
import {GrFavorite} from 'react-icons/gr'
import {BsCart2} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'

const Header = () => {
  return (
    <>
    <div className='dam-wrapper '>
        <div className='container'> 
        <div className='first'>
           <div className='create'>
             <a href='/'> <img src={img}/> </a>
             <div className='second'>
                      <p className='seller'><Link to='/Signup'>create a seller account</Link></p>
                        <form>
                            <input type="search" className="search" placeholder='   search...'></input>
                        </form>
                        
             </div>
            </div>
            
                <div className=' icons col-md-3' >
                    <ul className='dami-list'> 
                        <li><GrFavorite/></li>
                        <li><BsCart2/> 0</li>
                        <li> <BsPerson/> sign in</li>
                    </ul>
                </div>
        </div>
         </div>
    </div>
    <div className='container'>
        <div className=' navbar'>
        <nav className='nav'>
                <a className="nav-link " href="#">Home</a>
                <a className="nav-link " href="#">Shop</a>
                <a className="nav-link " href="#">Blog</a>
                <a className="nav-link " href="#">Contact</a>
                <a className="nav-link " href="#">About us</a>
                <a className="nav-link " href="#">Sale</a>
             </nav>
             <p className='dam-extra'>Extra 20% off save items + Free shipping for orders over $200</p>
        </div>
    </div>

    </>
  )
}

export default Header