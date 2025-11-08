/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins(@/plugins/index.ts) then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from '@/plugins/router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


const app = createApp(App)

registerPlugins(app)

// Ensure router initial navigation (and locale guard) completes before mount
router.isReady().then(() => {
	app.mount('#app')
})