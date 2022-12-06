import React from 'react'
import '../dashboard/Dashboard.css'
import {HiBell} from 'react-icons/hi'
import {MdImage} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import Sidebar from './Sidebar'

const Topnav = () => {
  return (
    <>
        <Sidebar/>
        <div className='topnav-container'>
            <div className='menu'>
                <div className='dashboard'>
                    Dashboard
                </div>
                <div className='profile'>
                    <select className='select'>
                        <option>TEE Gadgets</option>
                        <option>Others</option>
                        <option>Others</option>
                        <option>Others</option>
                        <option>Others</option>
                        <option>Others</option>
                    </select>
                        <HiBell className='bell'/>
                        <div className='profile-img'>
                            <MdImage className='img'/>
                        </div>
                </div>
            </div>
            <div className='home-icon'>
            <AiOutlineHome/>
            </div>
        </div>
    </>
  )
}

export default Topnav