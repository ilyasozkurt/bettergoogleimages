<script setup lang="ts">
import {ref, toRefs, watch, computed} from 'vue';
import {settings} from "@/stores/settings";

// Define the props
const props = defineProps({
  modelValue: Object,
  options: {
    type: Array,
    required: true,
    default: () => []
  },
  defaultSelected: {
    type: Object,
    required: false,
    default: () => ({label: 'Select Option', value: null})
  },
  buttonClass: {
    type: String,
    required: false,
    default: ''
  },
  dropdownClass: {
    type: String,
    required: false,
    default: ''
  }
});

// Define the emits
const emit = defineEmits(['update:modelValue']);

// Destructure props
const {modelValue, options, defaultSelected} = toRefs(props);

// Define the selectedOption state
const selectedOption = ref(defaultSelected.value);

// Watch for changes in modelValue to update selectedOption
watch(modelValue, (newVal) => {
  selectedOption.value = newVal;
});

// Define the search query state
const searchQuery = ref('');

// Computed property for filtered options based on search query
const filteredOptions = computed(() => {
  if (!searchQuery.value) {
    return options.value;
  }
  return options.value.filter(option =>
      option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Watch for changes in defaultSelected to update selectedOption
watch(defaultSelected, (newDefault) => {
  selectedOption.value = newDefault;
});

// Define the selectOption method
const selectOption = (option) => {
  selectedOption.value = option;
  searchQuery.value = '';
  emit('update:modelValue', option);
};

// Define the filterOptions method (optional since filtering is handled by computed property)
const filterOptions = () => {
};
</script>

<template>
  <div class="dropdown">
    <div
        class="btn dropdown-toggle"
        :class="{'btn-outline-light': settings.isDark, 'btn-outline-dark': !settings.isDark, [buttonClass]: buttonClass}"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
      {{ $t(selectedOption.label) }}
    </div>
    <div class="dropdown-menu" :class="{[dropdownClass]: dropdownClass}">
      <div class="p-2" v-if="options.length > 8">
        <input
            type="text"
            class="form-control"
            :placeholder="$t('search')"
            v-model="searchQuery"
            @input="filterOptions"
        />
      </div>
      <ul class="dropdown-items" :class="{'scrollable': options.length > 8}">
        <li v-for="option in filteredOptions" :key="option.value">
          <div class="dropdown-item" :class="{'active': option.value == selectedOption.value}" @click="selectOption(option)">
            {{ $t(option.label) }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
