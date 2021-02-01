import React from 'react'

export const Topnav = () => {
  return (
    <div className='top-nav'>
      <div className='container'>
        <ul id='top-ul'>
          <li>
            <a href='#'>Upload Proof | </a>
          </li>
          <li>
            <a href='#'>Activate</a>
          </li>
          <li>
            <form id='top-form'>
              <input
                type='text'
                name='s'
                value=''
                id='header-search-input'
                placeholder='Search...'
              />
            </form>
          </li>
          <li>
            <i className='fas fa-globe'></i>
          </li>
          <li>Español</li>
        </ul>
      </div>
    </div>
  )
}
