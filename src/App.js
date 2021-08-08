import React, { useState } from 'react'
import './style.css'
import { Button, TextField, Grid,Paper, Typography } from '@material-ui/core'
import Nav from './Nav'
import { ThemeProvider,createTheme } from '@material-ui/core/styles';



const App = () => {
    const [dark, setDark] = useState(false)
    const theme = createTheme({
        palette:{
            type:dark?"dark":"light"
        }
    })


    const [value, setValue] = useState('')
    const [disdata, setData] = useState({})
    
    const getValues = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=7c7c180a9582489ed9b78155e63b8d28&units=metric`)
        if (response.status === 200) {
            const data = await response.json()
            // setData(data.main.temp)
            setData({
                temp: data.main.temp,
                min: data.main.temp_min,
                max: data.main.temp_max,
                hum: data.main.humidity

            })

        } else {
            setData("No results")
        }
    }
    // const theme = () => {
    //     setDark(!dark)
    // }

    return (
        <ThemeProvider theme={theme}>
            <Paper>
            <Grid className="con" container>
                <Grid className="item" item xs={12} >
                    <Nav dark={dark} setDark={setDark}/>
                </Grid>
                <Grid className="item" item xs={0} sm={3} />
                <Grid className="item2"  item xs={12} sm={6}>
                <Paper className="pap" elevation={3}>
                        <div className="paper">
                        <TextField variant="outlined" label="Enter city name" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
                        <Typography variant="h4" align="center">{value}</Typography>
                        <Button variant="contained" style={{ margin: "10px" }} color="primary" onClick={getValues}>Get</Button>
                        {/* <Button variant="contained" style={{ margin: "10px" }} onClick={theme} color="secondary">{dark ? "Light Mode" : "Dark Mode"}</Button> */}
                        </div>
                        <Grid container spacing={2}>
                        <Grid item xs={2}/>
                        <Grid item xs={8}>
                        <Paper className="temp">
                            <Typography variant="h5" align="center">
                                {disdata.temp ? `Temp: ${disdata.temp} °C` : 'No results'}
                            </Typography>
                        
                        </Paper>
                        </Grid>
                        
                        <Grid item xs={2}/>
                        <Grid item xs={1}/>
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
                        <Typography variant="h5" align="center">
                        Max:
                        </Typography>
                        <Typography variant="h5" align="center">
                            {`${disdata.max} °C`}
                        </Typography>
                        </Paper>}
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                        {disdata.temp &&
                        <Paper className="temp">
                        <Typography variant="h5" align="center">
                            {`Humidity: ${disdata.hum}%`}
                        </Typography>
                        
                        </Paper>}
                        </Grid>
                        </Grid>
                    
                    </Paper>
                </Grid>
                <Grid className="item" item xs={0} sm={3} />
            </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default App
