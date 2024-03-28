import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiSass,
    DiBootstrap

} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'


const technologies = [
   {id: "html", name: "HTML5", icon: <DiHtml5/>, p:"Dominando a estrutura básica da web para construir interfaces de usuário."},
   {id: "css", name: "CSS3", icon: <DiCss3/>, p:"Estilizando e dando vida às páginas web com design moderno e responsivo."},
   {id: "js", name: "JavaScript", icon: <DiJsBadge/>, p:"Adicionando interatividade e dinamismo às páginas web para melhorar a experiência do usuário."},
   {id: "node", name: "Node.js", icon: <DiNodejsSmall/>, p:"Utilizando JavaScript no backend para criar aplicações web escaláveis e eficientes"},
   {id: "mysql", name: "MySQL", icon: <DiMysql/>,p:"Gerenciando e armazenando dados de forma segura e eficiente em bancos de dados relacionais" },
   {id: "react", name: "React", icon: <DiReact/>, p:"Desenvolvendo interfaces de usuário interativas e reativas para aplicações web modernas."},
   {id: "sass", name: "Sass", icon: <DiSass/>, p:"Utilizando pré-processadores CSS para escrever estilos de forma mais eficiente e organizada."},
   {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, p:"Implementando layouts responsivos e componentes estilizados rapidamente, facilitando o desenvolvimento frontend."},
   

]


const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}
                            </h3>
                        <p>{tech.p}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer ;