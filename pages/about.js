import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <Head>
              <title>Hesk Design | About</title>
              <meta name="keywords" content="hesk design manchester brand and marketing design"/>
            </Head>
            <div>
                
                <h1>About</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quis ratione consequuntur eligendi doloribus id quibusdam odio aperiam eaque rem, velit, expedita minima, rerum, non voluptas cumque. Delectus incidunt quis sint dolorum repellendus sapiente modi quae nostrum ipsam in, ex, suscipit, quidem placeat voluptatibus, sit totam ea sequi! Numquam obcaecati cupiditate id quam iste qui, porro dolorum voluptatum, molestiae, fuga rerum! Eos distinctio voluptatum odio vero fugit quae! Consequuntur voluptates, culpa non rerum, doloribus reprehenderit nemo quisquam recusandae nesciunt delectus facilis omnis eligendi! Dolores voluptate vel neque minus placeat doloremque repudiandae, repellat molestiae soluta dignissimos, ea! Nobis adipisci eveniet magni. </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perferendis, fugiat nobis doloribus reprehenderit voluptate corrupti ad ullam, ipsum reiciendis animi iure, quidem saepe impedit velit aut hic natus qui sequi, culpa repellat consectetur. Dolores in quae perferendis! Assumenda id quos, ullam eos, quod unde minus, ipsam recusandae possimus tempore consectetur. Totam corporis voluptate deleniti minus architecto aperiam nobis perferendis optio, ipsum reiciendis, consectetur aliquam nemo beatae! Nulla illo quas asperiores, molestiae quam alias incidunt vitae dolor consectetur, et necessitatibus ad facere ut modi reprehenderit architecto deserunt veniam natus ea. Officia facilis, recusandae dolore vero qui aut incidunt fugiat, dolor. </p>
    
                <Link href="/folder"><a className={styles.btn}>Folder Component</a></Link>
                
            </div>
        </>
    );
}
 
export default About;