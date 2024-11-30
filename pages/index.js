import Image from 'next/image';
import Logo from '../images/Logo.png'
import bwlogo from '../images/bedwars.webp';
import ffalogo from '../images/ffa.webp';
import smplogo from '../images/smp.webp';
import questionlogo from '../images/question.png';


function Home() {
  return (
    <main>
      <center>
      <a>&fbedtw&bL&r Server</a><br />
      <a>&bBedwars&r, &bBedwars FFA&r, &bSurvival servers&r... and &4MORE&r!</a><br />
      <Image src={Logo} width="210" height="auto"></Image><br /><br /><br />
      <a>&fWhat &bgamemodes &rdo we have?</a>
      <br /><br /><br />
      <div className='allgm'>
        <div className='bedwars gamemodes'>
          <Image src={bwlogo} width="240" ></Image>
          <div className='title'><a>Bedwars</a></div>
          <div className='desc'><a>&bBedwars&r... with &cEXTRA &ritems!</a></div>
        </div><br />
        <div className='bedwarsffa gamemodes'>
          <Image src={ffalogo} width="240" ></Image>
          <div className='title'><a>Bedwars FFA</a></div>
          <div className='desc'><a>&rA &cFFA &rserver with &bBedwars items</a></div>
        </div><br />
        <div className='survival gamemodes'>
          <Image src={smplogo} width="240" ></Image>
          <div className='title'><a>Survival</a></div>
          <div className='desc'><a>&rThere are &63 &rsurvival servers. &asmp1, &bsmp4 &rand &dsmp5&r!</a></div>
        </div><br />
        <div className='more gamemodes'>
          <Image src={questionlogo} width="240" ></Image>
          <div className='title'><a>... &4More</a></div>
          <div className='desc'><a>&rJoin the server and take a look now!</a></div>
        </div><br />
      </div>
      </center>
    </main>
  )
}

export default Home
