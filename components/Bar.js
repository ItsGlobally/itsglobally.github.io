// components/Bar.js
import Image from 'next/image';
import LogobedtwL from './LogobedtwL.png'

export default function Bar({ children }) {
    return (
        <div className="bar">
            <a href="/"><Image src={LogobedtwL} width="16" height="auto"></Image> bedtwL</a>
            <a href="/discord">Discord</a>
            {children}
        </div>
    );
}