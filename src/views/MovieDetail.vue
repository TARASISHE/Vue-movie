<template>
  <div class="top">
    <Spinner v-if="spinner"/>
  </div>
  <div
    class="container pt-40 px-4
  xs:pt-20"
  >
    <div
      class="flex items-center justify-center w-full h-full gap-5 
    xs:flex-col"
    >
      <img
        :src="movie.Poster"
        alt="Movie Poster"
        class="block m-auto py-2"
      >
      <div
        class=" text-white text-left 
      xs:text-center"
      >
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
        <p class="py-2 text-2xl sm:text-xl xs:text-base">
          {{ movie.Plot }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Spinner from '../components/Spinner.vue';

const movie = ref({});
const route = useRoute();
const spinner = ref(false);

const loadInfoAboutMovie = async() =>{
  try {
    spinner.value = true;
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_MOVIE_KEY}&i=${route.params.id}&plot=full`
    );
    const data = await resp.json();
    movie.value = data;
  } catch (error){
    alert(`Error:${error}`);
  } finally {
    spinner.value = false;
  }
};
loadInfoAboutMovie();

</script>

<style scoped>
.top{
  position: absolute;
  top: -400px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
