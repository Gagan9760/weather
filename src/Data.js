import React,{useState} from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { motion} from 'framer-motion'


const Data = ({ disdata }) => {
    const[click,setClick] = useState(false)
    return (
        
        <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
                    whileHover={{ scale: 1.1 }}
                >
                    <Paper className="temp" onClick={()=>setClick(!click)}>
                        <Typography variant="h5" align="center">
                            {disdata.temp ? `Temp: ${disdata.temp} °C` : 'No results'}
                        </Typography>
                        <Typography variant="h6" align="center">
                            {disdata.temp ? `${disdata.type}` : ""}
                            
                        </Typography>
                    </Paper>
                </motion.div>
                
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={1} />
            <Grid item xs={5}>

                {disdata.temp &&
                    <motion.div layout
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Paper className="minmax">
                            <Typography variant="h6" align="center">
                                Min:
                            </Typography>
                            <Typography variant="h5" align="center">
                                {`${disdata.min} °C`}
                            </Typography>
                        </Paper>
                    </motion.div>
                    
                }
            </Grid>
            <Grid item xs={5}>
                {disdata.temp &&
                    <motion.div layout
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Paper className="minmax">
                            <Typography variant="h6" align="center">
                                Max:
                            </Typography>
                            <Typography variant="h5" align="center">
                                {`${disdata.max} °C`}
                            </Typography>
                        </Paper>
                    </motion.div>
                }
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1} />
            <Grid item xs={10}>
                {disdata.temp &&
                    <motion.div layout
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Paper className="temp">
                            <Typography variant="h5" align="center">
                                {`Humidity: ${disdata.hum}%`}
                            </Typography>
                        </Paper>
                    </motion.div>
                }
            </Grid>
        </Grid>
       
    )
}

export default Data
