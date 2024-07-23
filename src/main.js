import { createApp } from 'vue'

import App from './App.vue'
import signUp from './components/signUp.vue'
import compOne from './components/compOne.vue'
import compTwo from './components/compTwo.vue'


const app = createApp(App)
app.component('sign-up', signUp)
app.component('comp-one', compOne)
app.component('comp-two', compTwo)
app.mount('#app')