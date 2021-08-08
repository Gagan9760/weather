import React, { useState } from 'react'
import './style.css'
import {Grid,Paper} from '@material-ui/core'
import Nav from './Nav'
import { ThemeProvider,createTheme,makeStyles } from '@material-ui/core/styles';
import Input from './Input';

// const useStyles = makeStyles({
//     paper:{
//         backgroundColor: "#2B6BD6"
        
//     }
// })

const App = () => {
    // const classes = useStyles();
    const [dark, setDark] = useState(false)
    const theme = createTheme({
        palette:{
            type:dark?"dark":"light",
            primary:{
                main:"#2B6BD6"
            },
            secondary:{
                main:"#1B419C"
            }
        }
    })


    const [value, setValue] = useState('')
    const [disdata, setData] = useState({})
    
    const getValues = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=7c7c180a9582489ed9b78155e63b8d28&units=metric`)
        if (response.status === 200) {
            const data = await response.json()
            setData({
                temp: data.main.temp,
                min: data.main.temp_min,
                max: data.main.temp_max,
                hum: data.main.humidity,
                type: data.weather[0].main,

            })

        } else {
            setData("No results")
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Paper className={disdata.type==="Thunderstorm"||disdata.type==="Rain"||disdata.type==="Drizzle"?"conrain":(disdata.type==="Clouds"?"concloud":(disdata.type==="Clear"?"consunny":"con"))}>
            <Grid container>
                <Grid className="item" item xs={12} >
                    <Nav dark={dark} setDark={setDark}/>
                </Grid>
                <Grid className="item" item xs={0} sm={3} />
                <Grid className="item2"  item xs={12} sm={6}>
                <Input value={value} disdata={disdata} setValue={setValue} getValues={getValues}/>
                </Grid>
                <Grid className="item" item xs={0} sm={3} />
            </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default App
