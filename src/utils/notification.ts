export interface IMessage {
  title: string
  body: string
  url: string
}

export async function requestPermission() {
  if (!('Notification' in window)) {
    console.warn('当前浏览器不支持 Notification API')
    return
  }
  console.log('Notification.permission', Notification.permission)

  if (Notification.permission === 'granted') {
    return 'granted'
  }

  if (Notification.permission === 'denied') {
    return 'denied'
  }

  try {
    const result = await Notification.requestPermission()
    console.log('Notification.requestPermission() ->', result)
    return result
  } catch (error) {
    console.error('Notification.requestPermission error:', error)
    return 'denied'
  }
}

navigator.serviceWorker.register('/sw.js')

export async function postMessage(message: IMessage) {
  console.log('postMessage', navigator.serviceWorker.controller)
  await navigator.serviceWorker.ready;
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage(message)
  } else {
    // 等待 SW 接管
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      navigator.serviceWorker.controller?.postMessage(message)
    }, { once: true })
  }

}
