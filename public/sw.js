self.addEventListener('push', function (event) {
  const notification = event.data.text()
  console.log('notification', registration, notification)
  event.waitUntil(self.registration.showNotification(notification))
})


self.addEventListener('install', () => {
  console.log('SW installed')
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  console.log('SW activated')
  event.waitUntil(self.clients.claim())
})

self.addEventListener('message', event => {
  const data = event.data
  console.log('SW 收到消息:', data)

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon.png',
      data: { url: data.url }
    })
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        const clientUrl = new URL(client.url)
        const notificationUrl = new URL(event.notification.data.url)

        if (clientUrl.origin === notificationUrl.origin && 'focus' in client) {
          return client.focus()
        }
      }
      return clients.openWindow(event.notification.data.url)
    })
  )
})