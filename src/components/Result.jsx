import React from 'react'
import './Style.css'

export default function Result({result}) {
    
    const {name, main} = result
    
    if(!name) return null

    const kelvinTemp = 273.15

    return (
        <div className="result">
            
            <h2 className="temp">La temperatura actual de {name} es: 
            <p>{parseInt(main.temp - kelvinTemp)} °C</p>
            </h2>

            <p className="temp__p">La temperatura minima es:
            <span className="temp__value"> {parseInt(main.temp_min - kelvinTemp)} °C</span>
            </p>

            <p className="temp__p">La temperatura maxima es: 
            <span className="temp__value"> {parseInt(main.temp_max - kelvinTemp)} °C</span>
            </p>

        </div>
    )
}
