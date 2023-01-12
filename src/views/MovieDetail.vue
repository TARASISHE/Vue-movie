<template>
  <div class="container pt-40">
    <div class="flex items-center justify-center w-full h-full gap-5 ">
      <img
        :src="movie.Poster"
        alt="Movie Poster"
        class="block m-auto py-2"
      >
      <div class=" text-white text-left ">
        <h2 class="text-3xl py-2">
          {{ movie.Title }}
        </h2>
        <p class="py-1">
          {{ movie.Genre }}
        </p>
        <p class="py-1">
          {{ movie.Released }}
        </p>
        <p class="py-1">
          imdbRating: {{ movie.imdbRating }}
        </p>
        <p class="py-2 text-2xl">
          {{ movie.Plot }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const movie = ref({});
const route = useRoute();

onBeforeMount( async () => {
  try {
    const resp = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_MOVIE_KEY}&i=${route.params.id}&plot=full`);
    const data = await resp.json();
    movie.value = data;
  } catch (error){
    alert(`Error:${error}`);
  }
});

</script>
