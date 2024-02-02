import { createApp } from "vue";
import App from "./App.vue"
import registerComponents from "../dist/unittec"



const app = createApp(App)

app.use(registerComponents)
app.mount('#app')

