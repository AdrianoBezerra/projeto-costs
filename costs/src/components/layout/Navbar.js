import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import Conteier from './Conteiner'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Conteier>
                <Link to="/"><img src={logo} alt="Costs"></img></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projeto</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li>
                    {/* <li className={styles.item}><Link to="/newproject">Novo Projeto</Link></li> */}
                </ul>
            </Conteier>
        </nav>
    )
}

export default Navbar