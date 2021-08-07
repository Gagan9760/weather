import React from 'react'
import { AppBar,Typography } from '@material-ui/core'
const Nav = () => {
    return (
        <div>
            <AppBar color="secondary" position="static" style={{top:0}}>
            <Typography variant="h5" style={{width:"100%",textAlign:'center',padding:'10px  '}}>
            Weather
          </Typography>
            </AppBar>
        </div>
    )
}

export default Nav
