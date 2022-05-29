// https://developers.google.com/web/tools/workbox/guides/get-started

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js'
)

workbox.setConfig({
    debug: true,
    maxAgeSeconds: 0,
    maxAge: 0,
})

workbox.core.setCacheNameDetails({
    prefix: 'listingslab-hof',
})

workbox.precaching.precacheAndRoute([])
workbox.skipWaiting()
workbox.clientsClaim()
