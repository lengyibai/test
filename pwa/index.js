window.deferredPrompt = null

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch((err) => {
    console.error('Service Worker 注册失败:', err)
  })
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  window.deferredPrompt = e
})

window.addEventListener('appinstalled', () => {
  console.log('PWA 已安装')
  window.deferredPrompt = null
})
