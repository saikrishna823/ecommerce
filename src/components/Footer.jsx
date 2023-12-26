import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
       <InstagramIcon/>
       <FacebookIcon/>
       <LinkedInIcon/>
       <GitHubIcon/>

    </div>
    <p>@ 2023 shopIn.com</p>
</div>
  )
}

export default Footer