import Image from 'next/image';
import Logo from '../components/Logo.png'
function Home() {
  return (
    <main>
      <p>eee</p>
      <Image src={Logo} width="210" height="auto"></Image>
    </main>
  )
}

export default Home
