// _app.js
import '../global.css';
import Bar from '../components/Bar';
import Foot from '../components/Foot';
import { useEffect } from 'react';
import '../css/Bar.css';
import '../css/Foot.css';
import '../css/App.css';
import '../css/home.module.css'
import '../css/Input.css'
import '../css/Gamemodes.css'

export default function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    // 確保在客戶端執行替換
    function ColorReplace() {
      const appElement = document.querySelector('.app');
      if (appElement) {
        const elements = appElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          // 只處理文本節點
          if (element.childNodes.length > 0) {
            for (let j = 0; j < element.childNodes.length; j++) {
              const node = element.childNodes[j];
              if (node.nodeType === 3) {  // 檢查是否是文本節點
                node.nodeValue = node.nodeValue
                .replace(/§0/g, '</a><a class="a" style="color: #000000;">') // 黑色
                .replace(/§1/g, '</a><a class="a" style="color: #0000AA;">') // 深蓝色
                .replace(/§2/g, '</a><a class="a" style="color: #00AA00;">') // 深绿色
                .replace(/§3/g, '</a><a class="a" style="color: #00AAAA;">') // 深青色
                .replace(/§4/g, '</a><a class="a" style="color: #AA0000;">') // 深红色
                .replace(/§5/g, '</a><a class="a" style="color: #AA00AA;">') // 深紫色
                .replace(/§6/g, '</a><a class="a" style="color: #FFAA00;">') // 橙色
                .replace(/§7/g, '</a><a class="a" style="color: #AAAAAA;">') // 浅灰色
                .replace(/§8/g, '</a><a class="a" style="color: #555555;">') // 深灰色
                .replace(/§9/g, '</a><a class="a" style="color: #5555FF;">') // 蓝色
                .replace(/§a/g, '</a><a class="a" style="color: #55FF55;">') // 绿色
                .replace(/§b/g, '</a><a class="a" style="color: #55FFFF;">') // 青色
                .replace(/§c/g, '</a><a class="a" style="color: #FF5555;">') // 红色
                .replace(/§d/g, '</a><a class="a" style="color: #FF55FF;">') // 粉色
                .replace(/§e/g, '</a><a class="a" style="color: #FFFF55;">') // 黄色
                .replace(/§f/g, '</a><a class="a" style="color: #FFFFFF;">') // 白色
                .replace(/§r/g, '</a><a class="a" style="color: #FFFFFF;">') // 重置为默认颜色
                .replace(/&0/g, '</a><a class="a" style="color: #000000;">') // 黑色
                .replace(/&1/g, '</a><a class="a" style="color: #0000AA;">') // 深蓝色
                .replace(/&2/g, '</a><a class="a" style="color: #00AA00;">') // 深绿色
                .replace(/&3/g, '</a><a class="a" style="color: #00AAAA;">') // 深青色
                .replace(/&4/g, '</a><a class="a" style="color: #AA0000;">') // 深红色
                .replace(/&5/g, '</a><a class="a" style="color: #AA00AA;">') // 深紫色
                .replace(/&6/g, '</a><a class="a" style="color: #FFAA00;">') // 橙色
                .replace(/&7/g, '</a><a class="a" style="color: #AAAAAA;">') // 浅灰色
                .replace(/&8/g, '</a><a class="a" style="color: #555555;">') // 深灰色
                .replace(/&9/g, '</a><a class="a" style="color: #5555FF;">') // 蓝色
                .replace(/&a/g, '</a><a class="a" style="color: #55FF55;">') // 绿色
                .replace(/&b/g, '</a><a class="a" style="color: #55FFFF;">') // 青色
                .replace(/&c/g, '</a><a class="a" style="color: #FF5555;">') // 红色
                .replace(/&d/g, '</a><a class="a" style="color: #FF55FF;">') // 粉色
                .replace(/&e/g, '</a><a class="a" style="color: #FFFF55;">') // 黄色
                .replace(/&f/g, '</a><a class="a" style="color: #FFFFFF;">') // 白色
                .replace(/&r/g, '</a><a class="a" style="color: #FFFFFF;">') 
                .replace(/&l/g, '</a><a class="a" style="font-weight: bold;"')
                .replace(/&n/g, '</a><a class="a" style="text-decoration: underline;"')
                .replace(/&o/g, '</a><a class="a" style="font-style: italic;"')              
                ;
                element.innerHTML = element.innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                
              }
            }
          }
        }
      }
    }
  
    // 在客戶端加載後執行 ColorReplace
    ColorReplace();
  }, []);

  return (
    <div>
      <Bar />
      <div className="app">
        <Component {...pageProps} />
        <br /><br /><br />
      </div>
      <Foot />
    </div>
  );
}