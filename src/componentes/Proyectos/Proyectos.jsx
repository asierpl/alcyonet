import './Proyectos.css'

let proyectos = [
    {id : 0 , href : 'https://proyecto-react-teal.vercel.app/' , title : 'Bonanza'},
    {id : 1 , href : 'https://luma-eta.vercel.app/' , title : 'LUMA'},
]

export const Proyectos = () => {

    return (
        <div className="Proyectos">
            <ul className="Proyectos-ul">
                {proyectos.map(proyect => (
                    <Project key={proyect.id} {...proyect} />
                ))}
            </ul>
        </div>
    )
}

const Project = (props) => {
    const {href, title} = props

    return (
        <li className="Proyectos-li">
            <a href={href} title={title} target='_blank' className="Proyectos-a">
                <div className="Proyectos-content">
                    <iframe 
                        src={href} 
                        title={title} 
                        className="Proyectos-iframe" 
                        loading="lazy" >
                    </iframe>
                    <div className="Proyectos-overlay"></div>
                </div>
            </a>
        </li>
    )
}
