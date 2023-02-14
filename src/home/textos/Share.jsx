import React from 'react'
import './share.scss'
import qrcode from './qrcode.svg'

export default function Share() {
  return (
    <div className='share'>
        <div className="containerShare">
            <div className="code">
                <img src={qrcode} alt="" />
                <div className="text">
                    <h1>#GUIAVIRTUAL</h1>
                    <h1>DEATENDIMENTO</h1>
                    <h1>ÀSMULHERESVÍTIMAS</h1>
                    <h1> <span>DEVIOLÊNCIA</span></h1>
                    <h2>Compartilhe o Guia Virtual com as pessoas que trabalham com você.</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
