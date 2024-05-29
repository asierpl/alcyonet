import './Proyectos.css'



let proyectos = [
    {id : 0 , href : 'https://proyecto-react-teal.vercel.app/' , title : 'Bonanza'},
    {id : 0 , href : 'https://canonhuelva.com/' , title : 'Bonanza'},
    {id : 0 , href : 'https://proyecto-react-teal.vercel.app/' , title : 'Bonanza'}
    
]

export const Proyectos = () => {



    return(
        <>
        
        <div className="Proyectos">
            <ul className="Proyectos-ul">
                {proyectos.map( proyect => (
                    <Proyect key={proyect.id} {...proyect} />
                ))}
            </ul>
        </div>
        </>
    )
}

const Proyect = (props) => {

    const {href , title  } = props

    return(
        <>
        <li className="Proyectos-li">
        <a href={href} title={title} target='_blank' className="Proyectos-a">
                <iframe 
                    src={href} 
                    title={title} 
                    className="Proyectos-iframe" 
                    loading="lazy"
                ></iframe>
                
            </a>
        </li>
        </>
    )
}