import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Khi frontend gọi đến các endpoint bắt đầu bằng /api (ví dụ: /api/auth/login)
      '/api': {
        target: 'http://localhost:5001', // Vite sẽ tự động chuyển tiếp request sang cổng 5001 của Backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})