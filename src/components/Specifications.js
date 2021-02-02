import React, { useState, useEffect } from 'react'

export const Specifications = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let response = await fetch('http://localhost:5628/product/20425')
        if (response.ok) {
          let productDetail = await response.json()
          setData(productDetail[0])
        } else {
          alert('Did not recieve response')
        }
      } catch (error) {
        alert(error)
      }
    }
    fetchDetails()
  }, [setData])
  return (
    <>
      {data && (
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
                  <td>{data.OS}</td>
                </tr>
                <tr>
                  <td>
                    <b>Processecor:</b>
                  </td>
                  <td>{data.ScreenSize}</td>
                </tr>
                <tr>
                  <td>
                    <b>Display:</b>
                  </td>
                  <td>{data.ScreenSize}</td>
                </tr>
                <tr>
                  <td>
                    <b>SIM Card:</b>
                  </td>
                  <td>{data.SIM}</td>
                </tr>
                <tr>
                  <td>
                    <b>Memory:</b>
                  </td>
                  <td>{data.Memory}</td>
                </tr>
                <tr>
                  <td>
                    <b>Camera:</b>
                  </td>
                  <td>{data.FrontCamera}</td>
                </tr>
                <tr>
                  <td>
                    <b>Battery:</b>
                  </td>
                  <td>{data.BatteryTalkTime}</td>
                </tr>
                <tr>
                  <td>
                    <b>High Speed Capable:</b>
                  </td>
                  <td>{data.FourGCapable}</td>
                </tr>
                <tr>
                  <td>
                    <b>Wi-Fi Bluetooth Capable:</b>
                  </td>
                  <td>{data.WiFiBluetooth}</td>
                </tr>
                <tr>
                  <td>
                    <b>Speakerphone Voicemail Dialing:</b>
                  </td>
                  <td> {data.SpeakerphoneVoice} </td>
                </tr>
                <tr>
                  <td>
                    <b>MicroSD Capability:</b>
                  </td>
                  <td>{data.MicroSD}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}{' '}
    </>
  )
}
