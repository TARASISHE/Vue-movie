<template>
  <select
    v-model="sortBy"
    class="w-48 my-6 rounded-md h-8 bg-lightgray text-white"
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
  <ul>
    <Tweet
      v-for="item in sorteredItems"
      :key="item.id"
      :item="item"
      @toggleLikes="toggleLikes"
    />
  </ul>
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


const liked = ref(false)
const toggleLikes = () =>{
  liked.value = !liked.value;
  liked.value ? item.likes.value++ : item.likes.value-- ;

};

  
const sortBy = ref('date');
const sorteredItems = computed(() => {
  const itemsSorted = [...props.items];
  return itemsSorted.sort((a, b) => {
    if (a[sortBy.value] > b[sortBy.value]) return -1;
    if (a[sortBy.value] < b[sortBy.value]) return 1;
  });
});
  
</script>


