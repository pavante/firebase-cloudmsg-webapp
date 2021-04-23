
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyC_u-zZpzQDWyxBwkqLpGjsJ8_NT33wn9A",
    authDomain: "hvv-switch-qa.firebaseapp.com",
    databaseURL: "https://hvv-switch-qa.firebaseio.com",
    projectId: "hvv-switch-qa",
    storageBucket: "hvv-switch-qa.appspot.com",
    messagingSenderId: "230158583098",
    appId: "1:230158583098:web:e69b68531dce69e9327c03",
    measurementId: "G-KZQ5EC6LR5"
}

const app = firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
// messaging.setBackgroundMessageHandler(payload => {
//   console.log(payload)
// })


messaging.setBackgroundMessageHandler(function(payload) {
    // Messages received. Either because the
    // app is running in the foreground, or
    // because the notification was clicked.
    // `payload` will contain your data.
    console.log('Message received. ', payload)
})
  