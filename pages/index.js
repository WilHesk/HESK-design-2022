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
        <p className={styles.text}>If you are trying to make the world a better place by consuming less, appreciating more and supporting anyone you can after yourself - then thanks! We want to make your life easier by streamiling your marketing process and designing beautiful content that engages your customer emotionally. We know as a business owner or sole trader the jobs are neverending and the pressure to be putting out marketing content is high! We can help you develop an honest and engaging brand story that connects with your customers and improves your sales.</p>
        <p className={styles.text}>Our website is currently under construction!!!!</p>

      </div>
    </>
  )
}
