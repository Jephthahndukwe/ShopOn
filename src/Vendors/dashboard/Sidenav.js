import React, { useState } from 'react'
import '../Stylings/Dashboard.css'
import {RiMenuFoldLine} from 'react-icons/ri'
import {RiDashboardFill} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import {MdOutlineInventory2} from 'react-icons/md'
import {TbMessageCircle} from 'react-icons/tb'
import {TbCurrencyDollar, TbLogout} from 'react-icons/tb'
import {FiSettings} from 'react-icons/fi'
import {BiSupport} from 'react-icons/bi'
import {MdOutlineShoppingBag} from 'react-icons/md'
import Logo1 from './img/S.png'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Sidenav = (props) => {
    const [display, setDisplay] = useState(true)

    const active = props.render ? 'dashboard-active' : undefined
    
    const menuToggle = () =>{
        setDisplay(!display)
    }
  return (
    <>
        {/* {display && <Sidebar/>} */}
        <div className='icon-container'>
            <div className='icon-wrapper'>
                <div className='logo'><img src={Logo1}/></div>
                <div className='menu-items'>
                <div className='menu1'>
                    <RiMenuFoldLine onClick={menuToggle}/>
                </div>
                <div className='dashboard1'>
                    <RiDashboardFill/>
                </div>
                <div className='shopping'>
                    <MdOutlineShoppingBag onClick={`${active}`}/>
                </div>
                <div className='contact'>
                    <IoMdContacts/>
                </div>
                <div className='inventory1'>
                   <Link to='/inventoryNav'> <MdOutlineInventory2/></Link>
                </div>
                <div className='messsage'>
                    <TbMessageCircle/>
                </div>
                <div className='currency'>
                    <TbCurrencyDollar/>
                </div>
                <div className='setting'>
                    <FiSettings/>
                </div>
                </div>
                <div className='foot'>
                <div className='support-icon'>
                    <BiSupport/>
                </div>
                <div className='logout-icon'>
                    <TbLogout/>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidenav