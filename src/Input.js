import React from 'react'
import { Button, TextField,Paper, Typography } from '@material-ui/core'
import Data from './Data'
import { motion } from "framer-motion";


const Input = ({value,disdata,setValue,getValues}) => {
    return (
        <>
            <Paper className="pap" elevation={10}>
                        <div className="paper">
                        <TextField
                        component={motion.h1}
                        initial={{y:-100,opacity:0}}
                        animate={{y:0,opacity:1}}
                        variant="outlined" label="Enter city name" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
                        <Typography variant="h4" align="center">{value}</Typography>
                        <Button
                        component={motion.div}
                        initial={{y:-50,opacity:0}}
                        animate={{y:0,opacity:1,transition:{delay:1}}}
                        whileTap={{scale:0.9}}
                        whileHover={{scale:1.03}}
                        variant="contained" style={{ margin: "10px" }} color="primary" onClick={getValues}>Get</Button>
                        </div>
                        <Data disdata={disdata} />
                    
                    </Paper>
        </>
    )
}

export default Input
