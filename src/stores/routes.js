import languages from "@/data/languages.js";
import {settings} from "@/stores/settings.js";

const supportedLanguages = languages.map(lang => lang.value);
const defaultLanguage = settings.defaultLanguage;

export default [
    {
        path: '/:lang([a-z]{2})?',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
        beforeEnter: (to, from, next) => {
            const lang = to.params.lang;
            if (supportedLanguages.includes(lang)) {
                next();
            } else {
                next('/' + defaultLanguage.value);
            }
        },
        meta: {
            title: 'home_meta_title',
            description: 'home_meta_description',
        },
        children: [
            // other routes...
        ],
    },
]
