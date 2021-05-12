import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    // to help you debug what's going on with i18n-http-backend!
    // -- qiu
    sourcemap: true
  }
})
