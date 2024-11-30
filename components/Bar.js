// components/Bar.js


export default function Bar({ children }) {
    return (
        <div className="bar">
            <a href="/"><img src="/_next/static/bedtwL.png" width="16" height="auto"></img> bedtwL</a>
            <a href="/discord">Discord</a>
            {children}
        </div>
    );
}