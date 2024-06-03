import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import languages from "./src/data/languages.js";

const languageCodes = languages.map(language => language.value);
const sitemapURLs = [];

export default defineConfig({
    plugins: [
        vue(),
        Sitemap({
            hostname: 'https://bettergoogleimages.com/',
            dynamicRoutes: sitemapURLs,
            i18n: {
                languages: languageCodes,
                defaultLanguage: 'en',
            },
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
