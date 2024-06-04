<script setup lang="ts">
import {settings} from "@/stores/settings";
import {onMounted, ref} from "vue";
import Modal from "bootstrap/js/dist/modal";

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
  getModal().hide();
};

onMounted(() => {
  initModal();
});

</script>

<template>
  <div class="modal fade" tabindex="-1" id="privacy_policy_modal" ref="modalInstance">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body p-4 p-md-5">
          <button type="button" class="btn-close position-absolute end-0 top-0 p-3 p-sm-4" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="content-style" v-html="$t('privacy_policy_text')"></div>
        </div>
      </div>
    </div>
  </div>
</template>
