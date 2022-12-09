import React from 'react'
import '../Stylings/Landingpage.css'
import oval from './img/Ovaloval.png'
import path from './img/Pathpath.png'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {IoMdContacts} from 'react-icons/io'
import {TbMoonStars} from 'react-icons/tb'
import card2 from './img/Card 2.png'

const Landingpage = () => {
  return (
    <>
      <div className='landingpage-container'>
        <div className='landingpage-wrapper'>
          <div className='card1'>
            <div className='congratulation'>
              <div className='circle'>
                <img src={oval}/>
                <img src={path} className='path'/>
              </div>
              <div className='welcome-text'>
                <h2>Congratulations John</h2>
              </div>
              <div className='paragraph'>
                <p>You have done 57.6% of more sales today. Check your new badge in your profile</p>
              </div>
            </div>
            <div className='balance'>
              <div className='margin'>
              <div className='wallet'>
                    <div className='deposit'>
                      <h2 className='header'>Balances</h2>
                      <div className='add'> + </div>
                    </div>
                    <div className='amount'>
                      <div className='symbol'><span className='dollar'>$</span> Dollar</div>
                      <div className='figure'>9784.79</div>
                    </div>
              </div>
              <div className='card-detail'>
                {/* <img src={card1}/> */}
                <img src={card2}/>
              </div>
              </div>
            </div>
          </div>

          <div className='card2'>
            <div className='sales'>
              <div className='top'>
                <div className='top-icon color'><TbMoonStars/></div>
                <div className='top-select'>
                  <select>
                    <option>This Week</option>
                    <option>This Week</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>
              <div className='bottom'>
                <div className='sales-amount'>
                  <p className='text'>Sales</p>
                  <div className='value'>
                    <p>&#x20A6; 0.00</p>
                    <p className='percent'>+0.00%</p>
                  </div> 
                </div>
                <div className='volume'>
                  <p className='text'>Volume</p>
                  <p className='zero'>0</p>
                </div>
              </div>
            </div>

            <div className='customer'>
            <div className='top'>
                <div className='top-icon'><IoMdContacts/></div>
                <div className='top-select'>
                  <select>
                    <option>This Week</option>
                    <option>This Week</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>

              <div className='below'>
                <div className='custom'>
                  <p>Customers</p>
                  <div className='values'>
                    <p className='custom-zero'>0</p>
                    <p className='percent'>+0.00%</p>
                  </div>
                </div>
                <div className='active'>
                  <p>Active</p>
                  <div className='active-value'>
                    <p className='custom-zero'>0</p>
                    <p className='percent'>+0.00%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='complete'>
            <div className='top'>
                <div className='top-icon'><HiOutlineShoppingBag/></div>
                <div className='top-select'>
                  <select>
                    <option>This Week</option>
                    <option>This Week</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>

              <div className='complete-bottom'>
                <div className='allorder'>
                  <p className='orders'>All orders</p>
                  <p className='zero'>0</p>
                </div>
                <div className='pending'><p>Pending</p><p className='zero'>0</p></div>
                <div className='completed'>
                  <p>Completed</p>
                  <div className='complete-value'>
                    <p className='custom-zero'>0</p><p>+0.00%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='graph'>
              <div className='retention'>
              <p className='client'>Client Retention</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage