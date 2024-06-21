import { useEffect, useState } from 'react'
import './SobreMi.css'

const { VITE_URL_API } = import.meta.env


export const SobreMi = () => {

    const [ datos , setDatos ] = useState({ about : {}})
    
    const {hrefYo  , altYo  , h2  , pA  , pB  , pC } = datos.about

    
    useEffect( () => {

        let controller = new AbortController()
       
        let options = {
            method  : 'get' , 
            signal : controller.signal,
        }

        fetch( `${VITE_URL_API}/about` , options )
            .then( res => res.json() )
            .then( data => {console.log(data) , setDatos(data)})
            .catch( error => console.log(error))
            .finally( () => controller.abort())

    } , [])

    return(
        <>
        <div className="SobreMi">
            <div className="Container-img">
                <img src={hrefYo} alt={altYo} className="SobreMi-img" />
            </div>
            <div className="Container-texto">
                <h2 className="SobreMi-h2">{h2}</h2>
                <p className="SobreMi-p">{pA}</p>
                <p className="SobreMi-p">{pB}</p>
                <p className="SobreMi-p">{pC}</p>
            </div>
        </div>
        </>
    )
}