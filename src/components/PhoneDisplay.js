import React from 'react'
import Iphone from '../images/iphone_xs_max.png'

export const PhoneDisplay = () => {
  return (
    <div className='container'>
      <h3>Shop</h3>
      <div className='phoneDisplay'>
        <div className='phone-images'>
          <ul>
            <li>
              <img src={Iphone} width='150' height='300' alt='' />
            </li>
            <li>
              <img src={Iphone} width='20' height='40' alt='' />
            </li>
          </ul>
        </div>
        <div className='phone-details'>
          <ul id='phone-facts'>
            <li>Applee</li>
            <li>iPhone XS Max</li>
            <li>
              Get exactly what you need with the preformance and realibility of
              this phone, which comes with a 5.8-inch edge-to-edge Infinity
              Display. It comes backed with a long-lasting battery (23 hours of
              talk time) and keeps everything with a 32GB built in memory.
              Finally, capture those high-quality moments with a built in 8 MP
              camera.
            </li>
            <li>Free Shipping</li>
            <li>Free SIM card included</li>
            <li>COLOR: BLACK</li>
            <li></li>
            <li>Storage</li>
            <li>Payment</li>
            <li>FINANCE WITH </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
