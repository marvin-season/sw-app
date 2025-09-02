import './App.css'
import { requestPermission, postMessage } from './utils/notification'
import { useEffect } from 'react'



async function notification() {
  const permission = await requestPermission()
  if (permission === 'granted') {
    setTimeout(postMessage, 2000)
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
