import React from 'react'
import { Button, TextField,Paper, Typography } from '@material-ui/core'
import Data from './Data'
const Input = ({value,disdata,setValue,getValues}) => {
    return (
        <>
            <Paper className="pap" elevation={10}>
                        <div className="paper">
                        <TextField variant="outlined" label="Enter city name" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
                        <Typography variant="h4" align="center">{value}</Typography>
                        <Button variant="contained" style={{ margin: "10px" }} color="primary" onClick={getValues}>Get</Button>
                        </div>
                        <Data disdata={disdata} />
                    
                    </Paper>
        </>
    )
}

export default Input
