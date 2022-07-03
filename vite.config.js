import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://AndyM11.github.io/api_rest_react_rick_and_morty/",
  plugins: [react()]
})
