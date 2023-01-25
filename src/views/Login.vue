<template>
  <div class="w-full h-screen">
    <div class="flex justify-center items-center flex-col h-full">
      <div 
        class=" h-3/6 w-2/5 flex flex-col justify-center items-center gap-y-5 bg-logreg rounded-xl
                md:w-3/5
                sm:w-3/5
                xs:w-4/5 xs:h-3/5"
      >
        <routerLink
          class="text-center text-white text-sm font-thin  hover:underline" 
          to="/"
        >
          &lt; Back to home
        </routerLink>
        <h1 class="text-center text-white text-2xl">
          Login
        </h1>
        <input 
          v-model="email"
          v-autofocus
          class=" px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white " 
          placeholder="Enter email..." 
          type="text"
        >
        <input 
          v-model="password"
          class="px-4 py-1 w-3/4 rounded text-white bg-lightgray focus:outline-none focus:ring focus:ring-slate-900 placeholder:text-white" 
          placeholder="Enter password..."
          type="password"
        >
        <p
          v-if="errMsg"
          class="text-[#ea3d4f]"
        >
          {{ errMsg }}
        </p>
        <button 
          v-if="submitbtn"
          class="searchbtn w-1/3 max-w-xs bg-green p-1 rounded-lg text-white text-xl uppercase duration-300 active:bg-darkgreen mt-2
          md:text-lg
          sm:text-sm
          xs:text-sm"
          @click="login"
        >
          Submit
        </button>
        <SpinnerBtn 
          v-if="spinner"
        />
        <p 
          class="text-white
                 
                 xs:text-sm xs:text-center"
        >
          If you don`t have account just <router-link
            class="text-green font-semibold"
            to="/register"
          >
            Register
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup> 
import SpinnerBtn from '../components/SpinnerBtn.vue';
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { vAutofocus } from '../directives/vAutofocus';


const router = useRouter();
const email = ref('');
const password = ref('');
const errMsg = ref('');
const spinner = ref(false);
const submitbtn = ref(true);

const login = () => {
  const auth = getAuth();
  spinner.value = true;
  submitbtn.value = false; 
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(()=>{
      router.push('/');
    })
    .catch((error)=>{
      switch (error.code){
      case 'auth/invalid-email':
        errMsg.value = 'Invalid email';
        break;
      case 'auth/user-not-found':
        errMsg.value = 'No account with this email was found';
        break;
      case 'auth/wrong-password':
        errMsg.value = 'Wrong-password';
        break;
      default:
        errMsg.value = 'Email or password was incorect';
        break;
      }
    })
    .then(()=>{
      spinner.value = false;
      submitbtn.value = true;
    });
};

</script>
