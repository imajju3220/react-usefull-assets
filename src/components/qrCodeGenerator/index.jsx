import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {
    const[qrCode, setQrCode]=useState('')
    const[input, setInput]=useState('')
    function handleGenerateQrCode(){
        setQrCode(input);
        setInput('');
    }
  return (
    <div>
        <h3>QR Code Generator</h3>
        <div style={{margin:'20px 0'}}>
            <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text" name='qr-code' placeholder='enter your value here' />
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode
            id='qr-code-value'
            value={qrCode}
            size={300}
            bgColor='#fff'
            />
        </div>
    </div>
  )
}
