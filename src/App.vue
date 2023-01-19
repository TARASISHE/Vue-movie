<template>
  <Header v-if="routeName? headerCheck : false" /> 
  <Home v-if="check? HomeCheck : false" />
  <RouterView />
</template>


<script setup>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const headerCheck = ref(true);
const HomeCheck = ref(true);
const router = useRouter();

const routeName = computed(() => {
  return router.currentRoute.value.path !== '/login' && router.currentRoute.value.path !== '/register'; 
});

const check = computed(() => {
  return router.currentRoute.value.path === '/login' && 
  router.currentRoute.value.path === '/register' && 
  router.currentRoute.value.path === '/movie/:id' && 
  router.currentRoute.value.path === '/forum'; 
});

</script>


