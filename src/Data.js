import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
const Data = ({ disdata }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <Paper className="temp">
                    <Typography variant="h5" align="center">
                        {disdata.temp ? `Temp: ${disdata.temp} °C` : 'No results'}
                    </Typography>
                    <Typography variant="h6" align="center">
                        {disdata.temp ? `${disdata.type}` : ""}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={1} />
            <Grid item xs={5}>
                {disdata.temp &&
                    <Paper className="minmax">
                        <Typography variant="h6" align="center">
                            Min:
                        </Typography>
                        <Typography variant="h5" align="center">
                            {`${disdata.min} °C`}
                        </Typography>
                    </Paper>}
            </Grid>
            <Grid item xs={5}>
                {disdata.temp &&
                    <Paper className="minmax">
                        <Typography variant="h6" align="center">
                            Max:
                        </Typography>
                        <Typography variant="h5" align="center">
                            {`${disdata.max} °C`}
                        </Typography>
                    </Paper>}
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1} />
            <Grid item xs={10}>
                {disdata.temp &&
                    <Paper className="temp">
                        <Typography variant="h5" align="center">
                            {`Humidity: ${disdata.hum}%`}
                        </Typography>
                    </Paper>}
            </Grid>
        </Grid>
    )
}

export default Data
