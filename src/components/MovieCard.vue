<template>
  <router-link 
    :to="`/movie/${id}`"
    class="
    sm:w-3/5
    xs:w-3/5"
  >
    <div class="relative block w-full overflow-hidden">
      <img
        class="img"
        :src="poster"
        alt="Movie Poster"
      >
      <div class="absolute py-2 px-4 bg-green text-white bottom-0 left-0 uppercase">
        {{ type }}
      </div> 
    </div>      
    <div class=" w-full bg-moviecardbg py-4 px-2 ">
      <p class="year">
        {{ year }}
      </p>
      <h3>{{ title }}</h3>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  poster: String,
  type: String,
  year: String,
  title: String,
  id: String
});

</script>

<style scoped>
.img{
  display: block;
  width: 100%;
  height: 375px;
  object-fit: fill;
}
</style>
