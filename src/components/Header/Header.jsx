import React from 'react'
import logo from '../../images/logo.png';

export default function Header() {
    return (
        <header className="text-center" style={{
          lineHeight: "23px",
          background: "#becfad"
        }} >
         <img src={logo} alt="logo" style={{width:"250px"}} />
      </header>
    )
}
