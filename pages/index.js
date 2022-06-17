import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hesk Design | Home</title>
        <meta name="keywords" content="hesk design manchester brand and marketing design"/>
      </Head>
      <div>
       
        <h1 className={styles.title}>Welcome to HESK Design</h1>
        <p className={styles.text}> First change test with github & netlify is it live yo?.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam iste incidunt corporis quia quod, in quos, quibusdam consequatur, ab quidem repellat. Quos quis quibusdam fugit blanditiis id non voluptatibus quo, quidem obcaecati beatae recusandae nisi maxime, neque accusamus tempore? Impedit eligendi, deserunt dolores voluptatum aliquam est in veritatis vel alias inventore distinctio, velit ex repellendus atque quasi, aspernatur, dignissimos praesentium tempore mollitia. Ex ipsa eveniet obcaecati provident placeat fugiat corporis voluptatibus asperiores, quasi numquam amet reiciendis similique sapiente doloremque inventore nihil eaque pariatur, quo distinctio libero nobis. Quas ut facere, in accusamus eius expedita voluptatibus consequuntur fuga, explicabo alias distinctio! </p>
  
        <Link href="/folder"><a className={styles.btn}>Folder Component</a></Link>
      </div>
    </>
  )
}
