import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/hesklogo.png" width={128} height={77} alt="Hesk logo"/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/folder"><a>Folder Component</a></Link>
        </nav>
     );
}
 
export default Navbar;