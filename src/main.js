import './fake-html-template-context.js'
import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import { WarpThemeHelper } from './theme-helper.js'

const theme = ref('warp-io')

createApp(App).provide('theme', theme).mount('#app')

const themeHelper = new WarpThemeHelper()
themeHelper.watch((newTheme) => theme.value = newTheme)
