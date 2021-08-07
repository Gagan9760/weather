import React, { useState } from 'react'
import './style.css'
import { Button, TextField } from '@material-ui/core'

const App = () => {
    const [value, setValue] = useState('')
    const [disdata, setData] = useState({})
    const [dark, setDark] = useState(false)
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
    const theme = () => {
        setDark(!dark)
    }

    return (
        <div className={dark ? "dark" : "light"}>
            
            <TextField variant="outlined" label="Enter city name" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
            <h1>{value}</h1>
            <Button variant="contained" style={{margin:"10px"}} color="primary" onClick={getValues}>Get</Button>
            <Button variant="contained" style={{margin:"10px"}} onClick={theme} color="secondary">Dark Mode</Button>
            
            <h2>{disdata.temp?`The temperature is: ${disdata.temp} °C`:'No results'}</h2>
            <h2>{disdata.temp?`The min temp is: ${disdata.min} °C`:''}</h2>
            <h2>{disdata.temp?`The max temp is: ${disdata.max} °C`:''}</h2>
            <h2>{disdata.temp?`The humidity is: ${disdata.hum}%`:''}</h2>
        </div>
    )
}

export default App
