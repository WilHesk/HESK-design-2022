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
       
        <h1 className={styles.title}>WELCOME TO HESK DESIGN</h1>
        <h2>HELPING CREATE EFFICIENT, WELL DESIGNED CONTENT THAT SELLS YOUR PRODUCT</h2>
        <p className={styles.text}>We know as a small business owner or sole trader the jobs are neverending! We can help you develop an honest and engaging brand story that connects with your customers emotionally - leading to improved sales</p>
        <p className={styles.text}>Our website is currently under construction, please join our mailing list if you wish to take advantage of discount offers we will be releasing upon completeion of the site.</p>
  
        <Link href="/folder"><a className={styles.btn}>Folder Component</a></Link>
      </div>
    </>
  )
}
