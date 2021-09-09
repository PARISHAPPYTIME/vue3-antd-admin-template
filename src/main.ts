import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '@/router/index'
import { setupPinia } from '@/store/index'

async function bootstrap() {
    const app = createApp(App)

    setupRouter(app)
    setupPinia(app)

    await router.isReady()

    app.mount('#app')
}

bootstrap()