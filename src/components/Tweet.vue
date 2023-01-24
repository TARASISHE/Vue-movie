<template>
  <li class="flex flex-col py-3 px-4 border-b border-tweetbor border-solid">
    <div class="flex relative mt-1">
      <div class="w-12 h-12 absolute top-3 left-0">
        <img :src="item.avatar">
      </div>
      <div class="flex flex-col w-full mt-1 pl-20 text-white ">
        <div class="block mb-2 ">
          <span>{{ item.date }}</span>
        </div>
        <div class="max-w-6xl">
          {{ item.body }}
        </div>
        <div
          class="flex items-center max-w-[15px] cursor-pointer"
          @click="likes++"
        >
          <div class="flex items-center justify-center w-10 h-10">
            <svg
              class="hover:fill-[red] hover:border-[red]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </div>
          <span
            class="pl-1"
          >{{ likes }}</span> 
        </div>
      </div>
    </div>
  </li>
</template>
  
<script setup>

import { ref, watch } from 'vue'; 
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const props = defineProps({
  item: Object
});
defineEmits(['toggleLikes']);

const likes = ref(props.item.likes);

watch( likes, async (val)=> {
  const updLikes = doc(db, 'tweets', props.item.id);
  await updateDoc(updLikes, {
    likes: val
  });
  
});

</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}

</style>
