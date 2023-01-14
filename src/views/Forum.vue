<template>
  <div class="container pt-14 px-4">
    <h1 class="pt-8 text-center text-white text-3xl">
      Forum
    </h1>
    <div>
      <form
        class="flex flex-col pt-6"
        @submit.prevent="addTweet()"
      >
        <textarea
          v-model="body"
          required
          placeholder="Write your tweet..."
          class="placeholder:text-white w-full h-28 bg-lightgray rounded-lg resize-none p-4
          md:w-full
          sm:w-full"
        />
        <button
          class="text-white w-1/6 inline-block bg-green rounded-lg h-10 mt-4 tweetbtn duration-300
          md:w-1/4
          sm:w-2/6
          xs:w-1/4"
          type="submit"
        >
          Post
        </button>
      </form>
      <TweetList :items="items" />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import TweetList from '../components/TweetList.vue';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '../main';


const items = ref([]);
const body = ref('');


const addTweet = () =>{
  addDoc(collection(db, 'tweets'), {
    avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
    body: body.value,
    likes: 0,
    date: new Date(Date.now()).toLocaleString()
  });
  body.value = '';
};

onMounted(() => {
  onSnapshot(collection(db, 'tweets'), (querySnapshot) => {
    const fbTweets = [];
    querySnapshot.forEach((doc) => {
      const tweet = {
        id: doc.id,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        body: doc.data().body,
        likes: doc.data().likes,
        date: new Date(Date.now()).toLocaleString()
      };
      fbTweets.push(tweet);
    });
    items.value = fbTweets ;
  });
});    
   

</script>

