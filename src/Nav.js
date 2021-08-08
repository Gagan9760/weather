import React from 'react'
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import Switch from '@material-ui/core/Switch';

const Nav = ({dark,setDark}) => {
    return (
        <div>

            <AppBar color="secondary" position="static" style={{ top: 0 }}>
                
                <Grid container >
                    
                    <Grid item xs={12} style={{
                        display:"grid",
                        placeItems:"center"
                    }} >
                    <Toolbar>
                        <Typography variant="h5" align="center" >
                            Weather
                        </Typography>
                        <CloudOutlinedIcon />
                        <Switch color="primary" checked={dark} onChange={()=>setDark(!dark)}></Switch>
                    </Toolbar>
                    </Grid>
                    
                </Grid>
                
            </AppBar>

        </div>
    )
}

export default Nav
