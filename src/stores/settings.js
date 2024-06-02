import {reactive} from "vue";
import languages from "@/data/languages.js";
import {colors, fileTypes, licenses, ratios, sizes, types} from "../data/filters";

const savedSettings = JSON.parse(localStorage.getItem('settings') || '{}');

const defaultFilters = {
    queryValue: null,
    selectedSize: sizes[0],
    selectedSizeWidth: null,
    selectedSizeHeight: null,
    selectedRatio: ratios[0],
    selectedColor: colors[0],
    selectedType: types[0],
    selectedFileType: fileTypes[0],
    selectedLicense: licenses[0]
}

const savedFilters = savedSettings.filters || defaultFilters;
const defaultLanguage = languages.find(language => language.value === 'en');
const savedLanguage = savedSettings.language || defaultLanguage;

export const settings = reactive({
    language: savedLanguage,
    isDark: savedSettings.isDark || false,
    keepFilters: savedSettings.keepFilters || false,
    filters: savedFilters,
    save() {
        localStorage.setItem('settings', JSON.stringify(settings));
    },
    resetFilters() {
        settings.filters = {...defaultFilters};
        settings.save();
    }
});
