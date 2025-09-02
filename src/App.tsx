import './App.css';
import { registerServiceWorker, notification } from './utils/notification';

const message = {
  title: "新提醒",
  body: "这是定时器推送的消息 " + new Date().toLocaleTimeString(),
  url: window.location.origin
}

registerServiceWorker('sw.js');

function App() {

  return (
    <button onClick={() => notification(message)}>
      <div>
        <h1>新提醒</h1>
        <p>这是定时器推送的消息 {new Date().toLocaleTimeString()}</p>
      </div>
    </button>



  )
}

export default App
