import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import type { App } from 'vue'

import 'fighting-design/dist/index.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: { app: App }) {
    ctx.app.use(FightingDesign)
  },
}
