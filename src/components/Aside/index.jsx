import Image from 'next/image'
import Link from 'next/link'
import styles from './aside.module.css'


import EditIcon from '@mui/icons-material/Edit'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import InfoIcon from '@mui/icons-material/Info'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import logo from './logo.svg'

export const Aside = () => {
    return (<aside className={styles.aside}>
        <Image src={logo} alt="Logo da JotaPeTech" width={180} height={54}/>
        
        <nav className={styles.nav}>
            <Link href="/publicar" className={styles.navItem}>
                <EditIcon className={styles.icon} />
                <span className={styles.label}>Publicar</span>
            </Link>
            
            <Link href="/" className={styles.navItem}>
                <HomeIcon className={styles.icon} />
                <span className={styles.label}>Feed</span>
            </Link>
            
            <Link href="/perfil" className={styles.navItem}>
                <PersonIcon className={styles.icon} />
                <span className={styles.label}>Perfil</span>
            </Link>
            
            <Link href="/sobre" className={styles.navItem}>
                <InfoIcon className={styles.icon} />
                <span className={styles.label}>Sobre Nós</span>
            </Link>
            
            <Link href="/sair" className={styles.navItem}>
                <ExitToAppIcon className={styles.icon} />
                <span className={styles.label}>Sair</span>
            </Link>
        </nav>
    </aside>)
}