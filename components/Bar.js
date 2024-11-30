// components/Bar.js
import Image from 'next/image';
import LogobedtwL from '../images/LogobedtwL.png'


export default function Bar({ children }) {
    return (
        <div className="bar">
            <a href="/"><Image src={LogobedtwL} width="16" height="auto"></Image> bedtwL</a>
            <a href="/discord">Discord</a>
            <a href="/join">How to join</a>
            <a href="/whoweare">Who we are</a>
            <a href="/trailer">Trailer</a>
            <a href="https://banlist.bedtwl.com/" target="blank" rel="noopener noreferrer">Ban List</a>
            <a href="https://fourms.bedtwl.com/" target="blank" rel="noopener noreferrer">Fourms</a>
            <a href="https://github.com/ItsGlobally/itsglobally.github.io" target="blank" rel="noopener noreferrer">Github</a>
            {children}
        </div>
    );
}