<script setup lang="ts">
import {settings} from "@/stores/settings";
import {onMounted, ref} from "vue";
import Modal from "bootstrap/js/dist/modal";
import Dropdown from "@/components/Dropdown.vue";
import languages from '@/data/languages'

const unsavedIsDark = settings.isDark;
const unsavedKeepFilters = settings.keepFilters;
const modalInstance = ref(null);

const initModal = () => {
  const modal = new Modal(modalInstance.value);
};

const getModal = () => {
  return Modal.getInstance(modalInstance.value);
};

const handleSave = () => {
  settings.save();
  getModal().hide();
};

const handleClose = () => {
  settings.isDark = unsavedIsDark;
  settings.keepFilters = unsavedKeepFilters;
  getModal().hide();
};

onMounted(() => {
  initModal();
});

</script>

<template>
  <div class="preferences">
    <div>
      <Dropdown :options="languages" v-model="settings.language" dropdown-class="dropdown-menu-end" :defaultSelected="settings.language"/>
    </div>
    <button class="btn btn-default settings" data-bs-toggle="modal" data-bs-target="#settings">
      <img v-if="settings.isDark" src="../assets/images/cog-light.svg" class="img-fluid" :alt="$t('settings')">
      <img v-if="!settings.isDark" src="../assets/images/cog-dark.svg" class="img-fluid" :alt="$t('settings')">
    </button>
  </div>
  <div class="modal fade" tabindex="-1" id="settings" ref="modalInstance" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ $t('settings') }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" role="switch" id="checkDark" v-model="settings.isDark">
            <label class="form-check-label" for="checkDark">
              {{ $t('dark_mode') }}
            </label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" v-model="settings.keepFilters" id="keepFilters">
            <label class="form-check-label" for="keepFilters">
              {{ $t('keep_filters') }}
            </label>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-outline-dark" @click="handleClose">
            {{ $t('close') }}
          </button>
          <button type="button" @click="handleSave" class="btn btn-success">
            {{ $t('save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
