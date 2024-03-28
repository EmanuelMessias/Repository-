import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../components/img/myPerson.jpeg'

import '../styles/components/sidebar.sass'




const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Emanuel Messias"/>
        <p className="title">Desenvolvedor Full Stack</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="https://drive.google.com/file/d/1H91OeDtJRd5EyKvgo-ZttMNr1l2UNvMo/view?usp=sharing" className="btn">Download Currículo</a>
    </aside>
}

export default Sidebar