import React,{useState} from 'react'
import './style.css'
const App = () => {
    const [value,setValue] = useState('')
    const [data,setData] = useState('')
    const getValues = async ()=>{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=7c7c180a9582489ed9b78155e63b8d28&units=metric`)
        if(response.status==200){
        const data = await response.json()
        setData(data.main.temp)
        }else{
            setData("No results")
        }
    }
    
    return (
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <h1>{value}</h1>
            <button onClick={getValues}>Get</button>
            <h1>{data}</h1>
        </div>
    )
}

export default App
