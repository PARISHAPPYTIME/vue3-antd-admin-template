import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '@/router/index'
import { setupPinia } from '@/store/index'
import { setupDirective } from '@/directive/index'
import { setupAntPlugin } from '@/plugins/antd'

async function bootstrap() {
    const app = createApp(App)

    setupPinia(app)
    setupRouter(app)
    setupDirective(app)
    setupAntPlugin(app)

    await router.isReady()

    app.mount('#app')
}

bootstrap()
