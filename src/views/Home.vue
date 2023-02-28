<template>
  <div class="container pt-16 px-4">
    <h1 class="text-center p-4 font-semibold text-white text-2xl">
      <span class=" text-green">VUE</span>Movie
    </h1>
    <div>
      <div class="relative">
        <img 
          class="block w-full h-[500px] relative z-0
          xs:h-72" 
          src="../assets/img/6c6291ce-70d5-11ed-88ef-1ac952ccf1b8.avif"
        >
        <div class="absolute right-0 bottom-0 left-0 text-white p-4 transp">
          <h3 class="uppercase font-bold text-2xl pb-2xs:text-xl">
            Find Movie You want
          </h3>
          <p class="xs:text-xs">
            It is a <span class=" text-green">VUE</span>Movie site to find film, series, cartoons and whatever you want. You can search it and find out about plot, rating of film and other usefull information you need. Don`t waste your time and go for the SEARCH.
          </p>
        </div>
      </div>
    </div>
    <form 
      class="flex flex-col pt-10 
      md:flex-col md:items-center md:justify-center
      sm:flex-col sm:items-center sm:justify-center
      xs:flex-col xs:items-center xs:justify-center" 
      @submit.prevent="searchMovies()"
    >
      <input 
        v-model="search"  
        class="maininp"
        type="text" 
        placeholder="What are you looking for?" 
      >
      <div class="flex items-center md:flex-col">
        <button class="searchbtn w-full max-w-xs bg-green p-4 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2 md:max-w-sm md:w-64 ">
          Search
        </button>
        <p
          v-if="loadingMessage"
          class="text-white ml-5 md:mt-6 md:ml-0"
        >
          Finding films...
        </p>
      </div>
      <p
        v-if="errStatus"
        class="text-[red] text-2xl pt-4"
      >
        Nothing found
      </p>
    </form>
    <div
      class="mt-10 flex flex-wrap 
                md:items-center md:justify-center 
                sm:flex-col sm:items-center sm:justify-center
                xs:flex-col xs:items-center xs:justify-center"
    >
      <MovieCard 
        v-for="movie in movies"
        :id="movie.imdbID"
        :key="movie.imdbID" 
        :poster="movie.Poster" 
        :type="movie.Type"
        :year="movie.Year"
        :title="movie.Title" 
        class="w-[30%] h-full my-4 mx-4 "
      />
    </div>
  </div>
</template>


<script setup>
import MovieCard from '../components/MovieCard.vue';
import { ref } from 'vue';


const search = ref('');
const movies = ref([]);
const errStatus = ref(false);
const loadingMessage = ref(false);

const searchMovies = async () =>{
  loadingMessage.value = true;
  try {
    if (search.value !== ''){
      const resp = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_MOVIE_KEY}&s=${search.value}`);
      const data = await resp.json();
      console.log(data)
      if (data.Search){
        movies.value = data.Search;
        console.log(data.Search)
        errStatus.value = false;
      } else {
        errStatus.value = true;
      }
    } 
  } catch (err){
    alert(err);
    errStatus.value = true;
  } finally {
    search.value = '';
    loadingMessage.value = false;
  }
};
</script>

<style scoped>
.img{
  display: block;
  width: 100%;
  height: 375px;
  object-fit: fill;
}

.spinner{
  left: 50%;
  top: 125%;
}
</style>
