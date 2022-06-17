import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
              <title>Hesk Design | Contact</title>
              <meta name="keywords" content="hesk design manchester brand and marketing design"/>
            </Head>
            <div>
                
                <h1 className={styles.title}>Contact</h1>
                <h2 className={styles.title}> This is a contact page! </h2>
                <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perferendis, fugiat nobis doloribus reprehenderit voluptate corrupti ad ullam, ipsum reiciendis animi iure, quidem saepe impedit velit aut hic natus qui sequi, culpa repellat consectetur. Dolores in quae perferendis! Assumenda id quos, ullam eos, quod unde minus, ipsam recusandae possimus tempore consectetur. Totam corporis voluptate deleniti minus architecto aperiam nobis perferendis optio, ipsum reiciendis, consectetur aliquam nemo beatae! Nulla illo quas asperiores, molestiae quam alias incidunt vitae dolor consectetur, et necessitatibus ad facere ut modi reprehenderit architecto deserunt veniam natus ea. Officia facilis, recusandae dolore vero qui aut incidunt fugiat, dolor. </p>
    
                <Link href="/folder"><a className={styles.btn}>Folder Component</a></Link>
                
            </div>
        </>
    );
}
 
export default Contact;