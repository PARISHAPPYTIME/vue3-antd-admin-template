import type { App } from 'vue'

import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export const setupAntPlugin = (app: App) => {
    app.use(antd)
}
