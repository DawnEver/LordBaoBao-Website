/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins(@/plugins/index.ts) then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


const app = createApp(App)

registerPlugins(app)

app.mount('#app')