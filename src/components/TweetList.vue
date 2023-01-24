<template>
  <select
    v-model="sortBy"
    class="w-48 my-6 rounded-md h-8 bg-lightgray text-white
    sm:w-40
    xs:w-40"
  >
    <option
      class="rounded-md"
      value="date"
    >
      Sort by date
    </option>
    <option
      class="rounded-md"
      value="likes"
    >
      Sort by like
    </option>
  </select>
  <Tweet
    v-for="item in sorteredItems"
    :key="item.id"
    :item="item"
  />
</template>
  
<script setup>
import { ref, computed } from 'vue';
import Tweet from './Tweet.vue';

const props = defineProps({
  items: {
    type: Array,
    reqired: true
  }
});

  
const sortBy = ref('likes');
const sorteredItems = computed(() => {
  const itemsSorted = [...props.items];
  return itemsSorted.sort((a, b) => {
    if (a[sortBy.value] > b[sortBy.value]) return -1;
    if (a[sortBy.value] < b[sortBy.value]) return 1;
  });
});
  
</script>
