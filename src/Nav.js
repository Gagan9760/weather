import React from 'react'
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import Switch from '@material-ui/core/Switch';
import { motion } from 'framer-motion';

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
                    <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.5}}
                        >
                        <Typography variant="h5" align="center" >
                            Weather
                        </Typography>
                        </motion.div>
                        <motion.div
                        initial={{scale:2,x:-60}}
                        animate={{scale:1,x:0}}
                        transition={{delay:0.5}}
                        >
                        <CloudOutlinedIcon />
                        </motion.div>
                        <motion.div
                        initial={{y:-100}}
                        animate={{y:0,transition:{delay:1}}}
                        whileTap={{scale:0.9}}>
                        <Switch
                        color="primary" checked={dark} onChange={()=>setDark(!dark)}></Switch>
                        </motion.div>
                        
                    </Toolbar>
                    </Grid>
                    
                </Grid>
                
            </AppBar>

        </div>
    )
}

export default Nav
