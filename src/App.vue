<template>
  <Header v-if="routeName? headerCheck : false" /> 
  <RouterView />
</template>


<script setup>
import Header from './components/Header.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const headerCheck = ref(true);
const router = useRouter();

const routeName = computed(() => {
  return router.currentRoute.value.path !== '/login' && router.currentRoute.value.path !== '/register'; 
});

</script>


