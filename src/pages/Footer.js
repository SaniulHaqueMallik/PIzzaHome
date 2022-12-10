import React from 'react'
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            < Instagram />
            < Facebook />
            < Twitter />
            < WhatsApp/>

        </div>
      <p>&copy; 2021 pizzahome@gmail.com</p>
    </div>
  )
}

export default Footer
