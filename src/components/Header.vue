<template>
  <nav class="bg-header w-full h-14 fixed z-10">
    <div class="container">
      <div class="flex py-4 justify-between items-center ">
        <div>
          <ul class="flex gap-6 text-white">
            <li> 
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li> 
              <router-link to="/forum">
                Forum
              </router-link>
            </li>
          </ul>
        </div>
        <div class="flex gap-6 text-white">
          <p class="italic"> 
            {{ userFb }} 
          </p> 
          <button 
            v-if="!isLoggedIn" 
            class="btn"
            @click="goToLogin()" 
          >
            Sign in
          </button>
          <button 
            v-if="isLoggedIn" 
            class="btn"
            @click="handleSignOut" 
          >
            Logout
          </button>
        </div>
      </div>
    </div>  
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from '../router';


const isLoggedIn = ref(false);
const userFb = ref('');

let auth;

auth = getAuth();
onAuthStateChanged(auth, (user)=>{
  if (user){
    isLoggedIn.value = true;
    userFb.value = user.displayName;
  } else {
    isLoggedIn.value = false;
    userFb.value = null;
  }
});


const goToLogin = () =>{
  router.push('/login');
};

const handleSignOut = ()=>{
  signOut(auth).then(()=>{
    router.push('/login');
  });
};


</script>

<style scoped>
  a {
    box-shadow: inset 0 0 0 0 #1384ad;
    color: #FFF;
    margin: 0 -.25rem;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  }
  a:hover {
    box-shadow: inset 100px 0 0 0 #1384ad;
    color: white;
  }
</style>

