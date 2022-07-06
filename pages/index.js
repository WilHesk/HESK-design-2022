import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hesk Design | Home</title>
        <meta name="keywords" content="hesk design manchester ethical brand and marketing design"/>
      </Head>
      <div>
       
        <h1 className={styles.title}>WELCOME TO HESK DESIGN</h1>
        <h2 className={styles.title}>I DESIGN EFFICIENT MARKETING FOR ORGANISATIONS THAT WANT TO MAKE THE WORLD A BETTER PLACE - SO WE CAN MAKE IT BETTER FASTER!</h2>
        <p className={styles.text}>We know as a small business owner or sole trader the jobs are neverending and the pressure to be putting out marketing content is high! We can help you develop an honest and engaging brand story that connects with your customers emotionally - leading to improved sales.</p>
        <p className={styles.text}>Our website is currently under construction!!!!</p>

      </div>
    </>
  )
}
