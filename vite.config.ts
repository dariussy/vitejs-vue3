import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [vue()],
    base : "/vitejs-vue3/",
    resolve : {
        alias:{
        '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
