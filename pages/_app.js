// _app.js
import '../global.css';
import Bar from '../components/Bar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Bar />
      <div className="app">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
