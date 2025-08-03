import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: "/Job-Portal-Application-/", // <-- this should match your repo name
  plugins: [ tailwindcss(),react()],
})
