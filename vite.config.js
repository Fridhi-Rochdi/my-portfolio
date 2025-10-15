import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Assure que les fichiers .jsx sont bien reconnus
  },
  esbuild: {
    loader: 'jsx', // Assure que JSX est bien traité par esbuild
  },
  base: './', // Utiliser des chemins relatifs pour le déploiement
});
