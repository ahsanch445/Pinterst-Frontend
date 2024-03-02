// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory ko customize karne ke liye
  },
};
