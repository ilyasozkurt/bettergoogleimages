<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {settings} from "@/stores/settings";
import {sizes, ratios, colors, types, fileTypes, licenses} from "@/data/filters";
import Dropdown from "@/components/Dropdown.vue";
import Settings from "@/components/Settings.vue";
import i18n from "@/i18n";

const hasSelected = ref(false);

const clearSelection = () => {
  hasSelected.value = false;
  settings.resetFilters();
};

const handleSubmit = () => {

  const searchUrlBase = "https://www.google.com/search?tbm=isch&safe=images";
  const selectedSizeQuery = settings.filters.selectedSizeWidth && settings.filters.selectedSizeHeight ? settings.filters.selectedSizeWidth + "x" + settings.filters.selectedSizeHeight : "";
  const searchUrl = searchUrlBase + "&imgsz=" + settings.filters.selectedSize.value + "&imgtype=" + settings.filters.selectedType.value + "&imgc=" + settings.filters.selectedColor.value + "&imgcolor=" + settings.filters.selectedColor.value + "&imgar=" + settings.filters.selectedRatio.value + "&as_filetype=" + settings.filters.selectedFileType.value + "&as_rights=" + settings.filters.selectedLicense.value + "&q=" + settings.filters.queryValue + "%20" + selectedSizeQuery;

  if (typeof gtag !== 'undefined') {
    gtag('event', 'search', {
      'search_term': settings.filters.queryValue
    });
  }

  window.open(searchUrl, '_blank');

};

const isFormClearable = () => {
  return settings.filters.queryValue || settings.filters.selectedSize.value !== sizes[0].value || settings.filters.selectedSizeWidth || settings.filters.selectedSizeHeight || settings.filters.selectedRatio.value !== ratios[0].value || settings.filters.selectedColor.value !== colors[0].value || settings.filters.selectedType.value !== types[0].value || settings.filters.selectedFileType.value !== fileTypes[0].value || settings.filters.selectedLicense.value !== licenses[0].value;
}

watch([
  settings.filters
], () => {

  if (settings.keepFilters) {
    settings.save();
  }

  hasSelected.value = isFormClearable();

});

const isClearable = computed(() => {
  return isFormClearable();
});

const currentYear = computed(() => {
  return new Date().getFullYear();
});

const initializeDarkMode = () => {
  //data-bs-theme=dark
  if (settings.isDark) {
    document.body.setAttribute('data-bs-theme', 'dark');
  } else {
    document.body.removeAttribute('data-bs-theme');
  }
};

initializeDarkMode();

watch(settings, (settings) => {

  if (settings.isDark) {
    document.body.setAttribute('data-bs-theme', 'dark');
  } else {
    document.body.removeAttribute('data-bs-theme');
  }

  //set language from settings to i18n
  if (i18n.global.locale.value != settings.language.value) {
    i18n.global.locale.value = settings.language.value;
    settings.save();
    //Set document language
    document.documentElement.lang = settings.language.value;
  }

});

//set language from settings to i18n
i18n.global.locale.value = settings.language.value;
document.documentElement.lang = settings.language.value;
settings.save();

</script>

<template>

  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <form @submit.prevent="handleSubmit" class="col-12 col-lg-9 col-xl-9">
        <div class="text-center">
          <a href="/" title="Better Google Image Search" class="logo mb-4">
            <img src="@/assets/images/logo.svg" width="750" height="225" class="img-fluid" alt="">
          </a>
        </div>
        <div class="position-relative mb-4">
          <input type="text" v-model="settings.filters.queryValue" :placeholder="$t('search')" class="input-search">
        </div>
        <div class="extra-filters mb-2">
          <div class="extra-filter">
            <div class="input-group">
              <Dropdown :options="sizes" :default-selected="settings.filters.selectedSize" v-model="settings.filters.selectedSize"/>
              <div class="size-container ms-2" v-if="settings.filters.selectedSize.value === 'custom'">
                <input type="text" v-model="settings.filters.selectedSizeWidth" class="form-control" :placeholder="$t('width')">
                <input type="text" v-model="settings.filters.selectedSizeHeight" class="form-control" :placeholder="$t('height')">
              </div>
            </div>
          </div>
          <div class="extra-filter">
            <Dropdown :options="ratios" :default-selected="settings.filters.selectedRatio" v-model="settings.filters.selectedRatio"/>
          </div>
          <div class="extra-filter">
            <Dropdown :options="colors" :default-selected="settings.filters.selectedColor" v-model="settings.filters.selectedColor"/>
          </div>
          <div class="extra-filter">
            <Dropdown :options="types" :default-selected="settings.filters.selectedType" v-model="settings.filters.selectedType"/>
          </div>
          <div class="extra-filter">
            <Dropdown :options="fileTypes" :default-selected="settings.filters.selectedFileType" v-model="settings.filters.selectedFileType"/>
          </div>
          <div class="extra-filter">
            <Dropdown :options="licenses" :default-selected="settings.filters.selectedLicense" v-model="settings.filters.selectedLicense"/>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-lg me-3" :class="{'disabled': !isClearable, 'btn-outline-light': settings.isDark, 'btn-outline-dark': !settings.isDark}" @click="clearSelection()">
            {{ $t('clear') }}
          </button>
          <button type="submit" class="btn btn-primary btn-lg px-5" :class="{'disabled': !settings.filters.queryValue}">
            {{ $t('search') }}
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="text-center position-absolute bottom-0 left-0 w-100 py-3">
    <div>
      <a href="https://github.com/ilyasozkurt" title="İlyas Özkurt" class="text-decoration-none" target="_blank">
        <img src="@/assets/images/ilyas-ozkurt.jpeg" class="avatar rounded me-2" alt="İlyas Özkurt"> İlyas Özkurt
      </a>
    </div>
    <div class="mt-3">
      © {{ currentYear }} {{ $t('all_rights_reserved') }}
    </div>
  </div>

  <Settings/>

</template>
