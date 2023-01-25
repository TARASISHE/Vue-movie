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
      <Transition
        name="fade"
        mode="out-in"
      >
        <Spinner v-if="spinner" />
      </Transition>
      <TransitionGroup
        tag="ul" 
        name="fade"
      >
        <TweetList
          v-if="showItems"
          :items="items"
        />
      </TransitionGroup>
      <div
        v-if="hideBtnsOnLoad"
        class="flex items-center justify-center text-white gap-8 mt-5 pb-5 text-xl"
      >
        <button
          v-if=" page === 1 ? hiddenBtn : true"
          @click="showPreviousTweets()"
        >
          &leftarrow; Previous
        </button>
        <button 
          v-if="noDispNextBtn === page ? hiddenBtn : true"
          @click="showNextTweets()"
        >
          Next &rightarrow;
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>

import Spinner from '../components/Spinner.vue';
import { ref, onMounted } from 'vue';
import TweetList from '../components/TweetList.vue';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  startAfter, 
  orderBy, 
  limit, 
  endBefore, 
  limitToLast, 
  getCountFromServer 
} from 'firebase/firestore';
import { db } from '../firebase';

const items = ref([]);
const body = ref('');
const totol = ref('');
const limited = ref(5);
const paginations = ref('');
const page = ref(1);
const lastVisibles = ref('');
const firstVisibles = ref('');
const hiddenBtn = ref(false);
const spinner = ref(false);
const showItems = ref(false);
const hideBtnsOnLoad = ref(false);


const addTweet = () =>{
  addDoc(collection(db, 'tweets'), {
    avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
    body: body.value,
    likes: 0,
    date: new Date(Date.now()).toLocaleString()
  });
  body.value = '';
};


const getTotalDocuments = async () =>{

  const totalDates = query(collection(db, 'tweets'));
  const documentSnapshots = await getDocs(totalDates);
  const total = documentSnapshots.docs.length;
  totol.value = total;
  paginations.value = Math.ceil(totol.value / limited.value);
};

const getTweets = async ()=>{
  spinner.value = true;
  showItems.value = false;
  hideBtnsOnLoad.value = false;
  const first = query(
    collection(db, 'tweets'),
    orderBy('date'),
    limit(limited.value)
  );

  getTotalDocuments();
  const documentSnapshots = await getDocs(first);
  const lastVisible =
    documentSnapshots.docs[documentSnapshots.docs.length - 1] || null;
  const firstVisible = documentSnapshots.docs[0] || null;
  lastVisibles.value = lastVisible;
  firstVisibles.value = firstVisible;

  const querySnapshot = await getDocs(first);
  const fbTweets = [];
  querySnapshot.forEach((doc) => {
    let item = {
      id: doc.id,
      avatar: doc.data().avatar,
      body: doc.data().body,
      likes: doc.data().likes,
      date: doc.data().date
    }; 
    fbTweets.push(item);
  });
  items.value = fbTweets;
  spinner.value = false;
  showItems.value = true;
  hideBtnsOnLoad.value = true;
};

const showNextTweets = async () =>{
  spinner.value = true;
  showItems.value = false;
  hideBtnsOnLoad.value = false;
  const next = query(
    collection(db, 'tweets'),
    orderBy('date'),
    limit(limited.value),
    startAfter(lastVisibles.value)
  );
  const documentSnapshots = await getDocs(next);
  const lastVisible =
    documentSnapshots.docs[documentSnapshots.docs.length - 1] || null;
  lastVisibles.value = lastVisible;
  const firstVisible = documentSnapshots.docs[0] || null;
  firstVisibles.value = firstVisible;
  page.value = page.value + 1;

  const fbNextTweets = [];
  const querySnapshot = await getDocs(next);
  querySnapshot.forEach((doc) => {
    let item = {
      id: doc.id,
      avatar: doc.data().avatar,
      body: doc.data().body,
      likes: doc.data().likes,
      date: doc.data().date
    };
    fbNextTweets.push(item);
  });
  items.value = fbNextTweets;
  spinner.value = false;
  showItems.value = true;
  hideBtnsOnLoad.value = true;
  window.scrollTo(0, 0);
};

const showPreviousTweets = async () =>{
  spinner.value = true;
  showItems.value = false;
  hideBtnsOnLoad.value = false;
  const back = query(
    collection(db, 'tweets'),
    orderBy('date'),
    limitToLast(limited.value),
    endBefore(firstVisibles.value)
  );

  const documentSnapshots = await getDocs(back);
  const lastVisible =
    documentSnapshots.docs[documentSnapshots.docs.length - 1] || null;
  lastVisibles.value = lastVisible;
  const firstVisible = documentSnapshots.docs[0] || null;
  firstVisibles.value = firstVisible;
  page.value = page.value - 1;


  const fbPrevTweets = [];
  const querySnapshot = await getDocs(back);
  querySnapshot.forEach((doc) => {
    let item = {
      id: doc.id,
      avatar: doc.data().avatar,
      body: doc.data().body,
      likes: doc.data().likes,
      date: doc.data().date
    };
    fbPrevTweets.push(item);
  });
  items.value = fbPrevTweets;
  spinner.value = false;
  showItems.value = true;
  hideBtnsOnLoad.value = true;
  window.scrollTo(0, 0);
};

const noDispNextBtn = ref();

const hideNextBtn = async () =>{
  const coll = collection(db, 'tweets');
  const snapshot = await getCountFromServer(coll);
  const totalTweets = snapshot.data().count;
  const result = Math.ceil(totalTweets / 5);
  noDispNextBtn.value = result;
};

hideNextBtn();

const noDispPrevBtn = ref();

const hidePrevBtn = async () =>{
  const coll = collection(db, 'tweets');
  const snapshot = await getCountFromServer(coll);
  const totalTweets = snapshot.data().count;
  const result = Math.floor(totalTweets / 5);
  noDispPrevBtn.value = result;
};

hidePrevBtn();

onMounted(()=>{
  getTweets();
});

</script>

