import React from 'react'
import Iphone from '../images/iphone_xs_max.png'

export const PhoneDisplay = () => {
  return (
    <div className='container'>
      <h4 id='shop-m'>Shop</h4>
      <div className='phoneDisplay'>
        <div className='phone-images'>
          <ul id='phonePics'>
            <li>
              <img src={Iphone} width='150' height='300' alt='' />
            </li>
            <li id='smallImg'>
              <img src={Iphone} width='20' height='40' alt='' />
            </li>
          </ul>
        </div>
        <div className='phone-details'>
          <ul id='phone-facts'>
            <li>Apple</li>
            <li>
              <h3 id='i-border' className='mb-3 mt-2'>
                iPhone XS Max
              </h3>
            </li>
            <li>
              Get exactly what you need with the preformance and realibility of
              this phone, which comes with a 5.8-inch edge-to-edge Infinity
              Display. It comes backed with a long-lasting battery (23 hours of
              talk time) and keeps everything with a 32GB built in memory.
              Finally, capture those high-quality moments with a built in 8 MP
              camera.
            </li>
            <li className='mt-4'>
              <i class='fas fa-box'></i> Free Shipping
            </li>
            <li className='mb-4'>
              <i class='fas fa-sim-card'></i> Free SIM card included
            </li>
            <li>COLOR: BLACK </li>
            <li>
              <input
                type='radio'
                id='black'
                name='gender'
                value='black'
              ></input>
              <input
                type='radio'
                id='brown'
                name='gender'
                value='brown'
              ></input>
              <input
                type='radio'
                id='clear'
                name='gender'
                value='clear'
              ></input>
            </li>
            <li id='i-borderT' className='mb-1'>
              Storage
            </li>
            <li>
              <button
                type='button'
                class='btn btn-outline-primary mr-2 mt-1  btn-sm'
              >
                64GB
              </button>
              <button
                type='button'
                class='btn btn-outline-primary mr-2 mt-1  btn-sm'
              >
                128GB
              </button>
              <button
                type='button'
                class='btn btn-outline-primary mr-2 mt-1  btn-sm'
              >
                256GB
              </button>
            </li>
            <li id='i-borderT'>Payment</li>
            <li>
              <button
                type='button'
                class='btn btn-outline-primary mr-2 mt-1  btn-sm'
              >
                Pay Monthly
              </button>
              <button
                type='button'
                class='btn btn-outline-primary mr-2 mt-1  btn-sm'
              >
                Pay In Full
              </button>
            </li>
            <li>FINANCE WITH </li>
            <li>$10.15 /mo.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
