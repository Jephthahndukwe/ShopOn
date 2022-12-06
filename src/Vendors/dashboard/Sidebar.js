import React from 'react'
import '../dashboard/Dashboard.css'
import {RiMenuFoldLine} from 'react-icons/ri'
import {RiDashboardFill} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import {MdOutlineInventory2} from 'react-icons/md'
import {TbMessageCircle} from 'react-icons/tb'
import {TbCurrencyDollar} from 'react-icons/tb'
import {FiSettings} from 'react-icons/fi'
import {MdOutlineShoppingBag} from 'react-icons/md'

const Sidebar = () => {
  return (
    <>
        <div className='sidebar-container'>
            <div className='wrapper'>
                <div className='logo'>
                    SHOPON
                </div>
                <div className='menu-icon'>
                <RiMenuFoldLine/>
                </div>
                <div className='dashboard-icon'>
                    <RiDashboardFill className='dashfill'/><div className='dash'>Dashboard</div>
                </div>
                <div className='order-icon'>
                    <MdOutlineShoppingBag className='order'/><span>Orders</span>
                </div>
                <div className='customer-icon'>
                    <IoMdContacts className='customer'/><span>Customers</span>
                </div>
                <div className='inventory-icon'>
                    <MdOutlineInventory2 className='inventory'/><span>Inventory</span>
                </div>
                <div className='conversation-icon'>
                    <TbMessageCircle className='conversation'/><span>Conversations</span>
                </div>
                <div className='withdraw-icon'>
                    <TbCurrencyDollar className='withdraw'/><span>Withdraw</span>
                </div>
                <div className='settings-icon'>
                    <FiSettings className='settings'/><span>Settings</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar