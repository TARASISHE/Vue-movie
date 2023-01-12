<template>
  <Header v-if="routeName? headerCheck : false" /> 
  <Home />
  <RouterView />
</template>


<script setup>
import Home from './views/Home.vue'
import Header from './components/Header.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const headerCheck = ref(true);
const router = useRouter();


const routeName = computed(() => {
  return router.currentRoute.value.path !== '/login' && router.currentRoute.value.path !== '/register'; 
});
console.log(router.currentRoute.value.path)


// const currentRoute = computed(() => {
//       return useRoute().name
//     })
// onMounted(()=>{
//   const router = useRouter()

//   let currentPathObject = router.currentRoute.value; 
 
// console.log("Route Object", currentPathObject)
// });

</script>


