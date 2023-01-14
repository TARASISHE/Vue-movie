<template>
  <div class="w-full h-screen">
    <div class="flex justify-center items-center flex-col h-full">
      <div 
        class="h-2/4 w-2/5 flex flex-col justify-center items-center gap-y-5 bg-logreg rounded-xl
               md:w-3/5
               sm:w-3/5
               xs:w-3/5"
      >
        <h1 class="text-center text-white text-2xl">
          Register
        </h1>
        <input 
          v-model="name"
          class=" px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white" 
          placeholder="Enter your name..." 
          type="text"
        >
        <input 
          v-model="email"
          class=" px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white" 
          placeholder="Enter email..." 
          type="text"
        >
        <input 
          v-model="password"
          class="px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white" 
          placeholder="Enter password..."
          type="password"
        >
        <button 
          v-if="submitbtn"
          class="searchbtn w-1/3 max-w-xs bg-green p-1 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2
                 md:text-lg
                 sm:text-sm
                 xs:text-sm"
          @click="register"
        >
          Submit
        </button>
        <SpinnerBtn 
          v-if="spinner"
        />
        <p class="text-white sm:text-center xs:text-sm xs:text-center">
          If you have already account just <router-link
            class="text-green font-semibold"
            to="/login"
          >
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup> 
import SpinnerBtn from '../components/SpinnerBtn.vue';
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'vue-router';


const router = useRouter();
const email = ref('');
const password = ref('');
const name = ref('');
const spinner = ref(false);
const submitbtn = ref(true);


const register = async ()=>{
  spinner.value = true;
  submitbtn.value = false; 
  try {
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
    const auth = getAuth();
    await updateProfile(auth.currentUser, {
      displayName: name.value
    });
  } catch (error){
    if (error){
      alert(`Error:${error}`);
    } else {
      router.push('/');
    }
  } finally {
    spinner.value = false;
    submitbtn.value = true;
  }
};
</script>
