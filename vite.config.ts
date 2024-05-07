// file: vite.config.ts

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    envDir: './src/', // environment directory for the source code
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
    },
    build: {
        lib: {
            //  main entry file for our library
            entry: path.resolve(__dirname, 'src/index.ts'),
            // set the name of our library to ViteVueComponentLib
            name: 'ViteVueComponentLib',
            // set the name of the main built files to be vite-vue-component-lib.${format}.js (where format will be set dynamically to es or umd)
            fileName: (format) => `vite-vue-component-lib.${format}.js`,
        },
        // set the rollupOptions so that Vue will not be bundled with our library (we’ll assume this library is consumed in a project that already uses Vue thus we do not want to include it multiple times)
        rollupOptions: {
            // Vue should not be bundled with the component library tell vite that this is an external dependency
            external: ['vue'],
            output: {
                // To expose global variables for use in the UMD builds for external dependencies
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
