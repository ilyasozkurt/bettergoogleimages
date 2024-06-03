import {createRouter, createWebHistory} from 'vue-router';
import {settings} from "@/stores/settings.js";
import languages from "@/data/languages.js";
import i18n from "@/i18n.js";
import routes from "@/stores/routes.js";

const i18nGlobal = i18n.global;
const supportedLanguages = languages.map(lang => lang.value);
const defaultLanguage = settings.defaultLanguage;

const appRouter = createRouter({
    history: createWebHistory(),
    routes: routes
});

appRouter.beforeEach((to, from, next) => {

    const lang = to.params.lang;

    if (lang && supportedLanguages.includes(lang)) {
        settings.language = languages.find(language => language.value === lang);
    } else {
        settings.language = defaultLanguage;
    }

    settings.save();

    next();

});

appRouter.afterEach((to, from) => {

    const lang = to.params.lang;

    i18nGlobal.locale.value = lang;
    i18nGlobal.fallbackLocale.value = lang;

    const t = i18nGlobal.t;
    const title = t(to.meta.title);
    const description = t(to.meta.description);

    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);

});

export default appRouter;
