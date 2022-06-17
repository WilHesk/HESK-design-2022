import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => {
    return ( 
        <footer>
             <div>
             <Link href="/folder"><a className={styles.btn}>GET HELP NOW</a></Link>
             </div>
             Hesk Design - Website Under Construction!
        </footer>
     );
}
 
export default Footer;