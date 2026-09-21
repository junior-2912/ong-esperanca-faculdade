import { defineConfig } from 'vite';

export default defineConfig({
    base: '/ong-esperanca-faculdade/',
    build: {
        rollupOptions: {
            input: {
                inicio: 'index.html',
                projetos: 'projetos.html',
                cadastro: 'cadastro.html'
            }
        }
    }
});