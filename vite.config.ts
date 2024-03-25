import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';
import dotenv from 'dotenv';
dotenv.config()

export default defineConfig({
    plugins: [vue()],
    base : process.env.BASE_URL,
    resolve : {
        alias:{
        '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
