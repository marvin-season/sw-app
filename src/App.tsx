import './App.css'
import { requestPermission, postMessage } from './utils/notification'
import { useEffect } from 'react'

const message = {
  title: "新提醒",
  body: "这是定时器推送的消息 " + new Date().toLocaleTimeString(),
  url: window.location.origin
}

async function notification() {
  const permission = await requestPermission()
  if (permission === 'granted') {
    setTimeout(() => postMessage(message), 2000)
  }
}

function App() {


  useEffect(() => {
    notification()
  }, [])

  return (
    <>

    </>
  )
}

export default App
