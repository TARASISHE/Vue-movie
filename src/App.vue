<template>
  <Header v-if="routeName? headerCheck : false" /> 
  <transition
    name="fade"
    mode="out-in"
  >
    <ChangePages v-if="isLoggedIn" />
    <RouterView v-else />
  </transition>
</template>


<script setup>
import Header from './components/Header.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import ChangePages from './components/ChangePages.vue';


const headerCheck = ref(true);
const router = useRouter();
const isLoggedIn = ref(false);


let auth;

auth = getAuth();
onAuthStateChanged(auth, (user)=>{
  if (user){
    isLoggedIn.value = false;
  } else if (user === null) {
    isLoggedIn.value = false;
  }
});

const routeName = computed(() => {
  return router.currentRoute.value.path !== '/login' && router.currentRoute.value.path !== '/register'; 
});

</script>

