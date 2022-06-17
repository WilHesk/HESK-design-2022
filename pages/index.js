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
        <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, consequatur nemo distinctio nihil praesentium qui non nisi quidem autem fugiat quas velit minus at itaque sed odio illo neque ut asperiores modi dolores a. A porro consequatur maxime neque labore debitis ipsam blanditiis iste assumenda, vel eveniet est et, unde provident natus, aliquam sequi incidunt aspernatur! Facilis temporibus, consequatur ut voluptates veritatis mollitia laudantium, pariatur quam dolor aliquam culpa tempore maiores repudiandae. Minima nisi aliquid maiores sit voluptate temporibus inventore voluptatibus cum nemo dolores totam magnam vero animi fuga error vitae, omnis ab! Dolor voluptatem repellat harum, architecto mollitia ex.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam iste incidunt corporis quia quod, in quos, quibusdam consequatur, ab quidem repellat. Quos quis quibusdam fugit blanditiis id non voluptatibus quo, quidem obcaecati beatae recusandae nisi maxime, neque accusamus tempore? Impedit eligendi, deserunt dolores voluptatum aliquam est in veritatis vel alias inventore distinctio, velit ex repellendus atque quasi, aspernatur, dignissimos praesentium tempore mollitia. Ex ipsa eveniet obcaecati provident placeat fugiat corporis voluptatibus asperiores, quasi numquam amet reiciendis similique sapiente doloremque inventore nihil eaque pariatur, quo distinctio libero nobis. Quas ut facere, in accusamus eius expedita voluptatibus consequuntur fuga, explicabo alias distinctio! </p>
  
        <Link href="/folder"><a className={styles.btn}>Folder Component</a></Link>
      </div>
    </>
  )
}
