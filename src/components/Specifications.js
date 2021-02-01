import React, { useState } from 'react'

export const Specifications = () => {
  return (
    <div className='container '>
      <div className='specCon'>
        <div className='titleName'>
          <h4 id='titleName '>Specifications</h4>
        </div>

        <div className='specs-table'>
          <table>
            <tr>
              <td>
                <b>Operating System:</b>
              </td>
              <td>IOS</td>
            </tr>
            <tr>
              <td>
                <b>Processecor:</b>
              </td>
              <td>A12 Bionic Chip</td>
            </tr>
            <tr>
              <td>
                <b>Display:</b>
              </td>
              <td>6.5 Super Retina display</td>
            </tr>
            <tr>
              <td>
                <b>SIM Card:</b>
              </td>
              <td>Nano-SIM</td>
            </tr>
            <tr>
              <td>
                <b>Memory:</b>
              </td>
              <td>1GB RAM + 16GB Internal</td>
            </tr>
            <tr>
              <td>
                <b>Camera:</b>
              </td>
              <td>12MP Dual Cameras 7MP TrueDepth Front Camera</td>
            </tr>
            <tr>
              <td>
                <b>Battery:</b>
              </td>
              <td>25 Hours talk time</td>
            </tr>
            <tr>
              <td>
                <b>High Speed Capable:</b>
              </td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <b>Wi-Fi Bluetooth Capable:</b>
              </td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <b>Speakerphone Voicemail Dialing:</b>{' '}
              </td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <b>MicroSD Capability:</b>
              </td>
              <td>None</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
