<template>
  <div class="w-full h-screen">
    <div class="flex justify-center items-center flex-col h-full">
      <div 
        class="h-2/4 w-2/5 flex flex-col justify-center items-center gap-y-5 bg-logreg rounded-xl
               md:w-3/5
               sm:w-3/5
               xs:w-4/5 xs:h-3/5"
      >
        <routerLink
          class="text-center text-white text-sm font-thin hover:underline" 
          to="/"
        >
          &lt; Back to home
        </routerLink>
        <h1 class="text-center text-white text-2xl">
          Register
        </h1>
        <input 
          v-model="name"
          v-autofocus
          required
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
import { vAutofocus } from '../directives/vAutofocus';

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
    if (name.value === ''){
      alert('Enter your name');
    } else {
      await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        displayName: name.value
      });
      router.push('/'); 
    }
  } catch (error){
    alert(`Error:${error}`);
  } finally {
    spinner.value = false;
    submitbtn.value = true;
  }
};
</script>
