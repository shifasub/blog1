import React from 'react'
import { AppBar, Toolbar,Button } from '@mui/material'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
         <AppBar>
              <Toolbar>
                  <h4>MAIN</h4>
                  &nbsp; &nbsp; &nbsp;  
                  <Link to='/home'>
                      <Button variant='contained' > HOME</Button></Link>
                  &nbsp;
                  &nbsp;
                  <Link to='/add'>
                      <Button variant='contained' > BLOG</Button></Link>



              </Toolbar>
              
            
          </AppBar>
      
    </div>
  )
}

export default Navbar
