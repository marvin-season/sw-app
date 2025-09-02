import './App.css'
import { notification } from './utils/notification'
import { useEffect } from 'react'

const message = {
  title: "新提醒",
  body: "这是定时器推送的消息 " + new Date().toLocaleTimeString(),
  url: window.location.origin
}


function App() {


  useEffect(() => {
    notification(message)
  }, [])

  return (
    <>

    </>
  )
}

export default App
