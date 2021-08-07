import React,{useState} from 'react'
import './style.css'
import { Button,TextField } from '@material-ui/core'

const App = () => {
    const [value,setValue] = useState('')
    const [data,setData] = useState('')
    const [dark,setDark] = useState(false)
    const getValues = async ()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=7c7c180a9582489ed9b78155e63b8d28&units=metric`)
        if(response.status===200){
        const data = await response.json()
        setData(data.main.temp)
        }else{
            setData("No results")
        }
    }
    const theme = ()=>{
        setDark(!dark)
    }
    
    return (
        <div className={dark?"dark":"light"}>
            <TextField variant="outlined" label="Enter city name" value={value} onChange={(e)=>setValue(e.target.value)}></TextField>
            <h1>{value}</h1>
            <Button variant="contained" color="primary" onClick={getValues}>Get</Button>
            <Button variant="contained" onClick={theme} color="secondary">Change theme</Button>
                     
            <h1>{data}</h1>
        </div>
    )
}

export default App
