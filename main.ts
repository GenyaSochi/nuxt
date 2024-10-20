import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router} from './routers'

const pinia = createPinia()

app.use('pinia')
app.use('router')